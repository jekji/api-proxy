import type { KlineData, Interval } from './types'
import { getIntervalDuration } from './types'

export class KlineService {
  private influxURL: string
  private influxToken: string
  private influxOrg: string
  private influxBucket: string

  constructor() {
    this.influxURL = process.env.INFLUXDB_URL || 'https://us-east-1-1.aws.cloud2.influxdata.com'
    this.influxToken = process.env.INFLUXDB_TOKEN || 'XYv8i6y4Z6lTtLB3x69_5UqfMSq7PWVZqY1suHRzS8Aea4rOnvaSxtQiXA1jRenZ7u6cYgF63SIGgzcLYe7J6A=='
    this.influxOrg = process.env.INFLUXDB_ORG || 'jekji'
    this.influxBucket = process.env.INFLUXDB_BUCKET || 'kline'
  }

  async getKlineData(
    symbol: string,
    interval: Interval,
    from?: number,
    to?: number,
    limit: number = 1000
  ): Promise<KlineData[]> {
    const intervalSeconds = getIntervalDuration(interval)
    const fromTime = from ? `${from}` : '-1h'
    const toTime = to ? `${to}` : 'now()'

    const query = `
from(bucket: "${this.influxBucket}")
  |> range(start: ${fromTime}, stop: ${toTime})
  |> filter(fn: (r) => r._measurement == "prices")
  |> filter(fn: (r) => r.symbol == "${symbol}")
  |> filter(fn: (r) => r._field == "price")
  |> sort(columns: ["_time"])
  |> limit(n: ${limit})
    `

    const response = await fetch(`${this.influxURL}/api/v2/query?org=${this.influxOrg}`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${this.influxToken}`,
        'Content-Type': 'application/vnd.flux',
        'Accept': 'application/csv',
      },
      body: query,
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('InfluxDB error response:', errorText)
      throw new Error(`InfluxDB query failed: ${response.statusText} - ${errorText}`)
    }

    const csvData = await response.text()
    return this.parseCSVToKline(csvData, intervalSeconds)
  }

  private parseCSVToKline(csvData: string, intervalSeconds: number): KlineData[] {
    const lines = csvData.trim().split('\n')
    if (lines.length <= 1) return []

    // Skip the first line (header)
    const dataLines = lines.slice(1)
    const pricePoints: Array<{ time: number; price: number }> = []

    for (const line of dataLines) {
      if (!line.trim()) continue
      
      const columns = line.split(',')
      if (columns.length < 12) continue // Ensure we have all columns

      // CSV structure: ,_result,table,_start,_stop,_time,_value,_field,_measurement,category,pyth_id,symbol
      const timeStr = columns[5]   // _time column
      const priceStr = columns[6]  // _value column

      if (!timeStr || !priceStr || priceStr === '') continue

      const time = Math.floor(new Date(timeStr).getTime() / 1000)
      const price = parseFloat(priceStr)

      if (!isNaN(price) && !isNaN(time)) {
        pricePoints.push({ time, price })
      }
    }

    console.log(`Parsed ${pricePoints.length} price points`)
    
    // Group prices by interval and create OHLC data
    return this.groupByInterval(pricePoints, intervalSeconds)
  }

  private groupByInterval(
    pricePoints: Array<{ time: number; price: number }>,
    intervalSeconds: number
  ): KlineData[] {
    if (pricePoints.length === 0) return []
    
    // Sort points by time first
    pricePoints.sort((a, b) => a.time - b.time)
    
    const klineMap = new Map<number, { 
      open: number; 
      high: number; 
      low: number; 
      close: number; 
      firstTime: number; 
      lastTime: number 
    }>()

    for (const point of pricePoints) {
      const intervalStart = Math.floor(point.time / intervalSeconds) * intervalSeconds

      const existing = klineMap.get(intervalStart)
      if (existing) {
        existing.high = Math.max(existing.high, point.price)
        existing.low = Math.min(existing.low, point.price)
        // Update close if this point is later in time
        if (point.time >= existing.lastTime) {
          existing.close = point.price
          existing.lastTime = point.time
        }
      } else {
        klineMap.set(intervalStart, {
          open: point.price,
          high: point.price,
          low: point.price,
          close: point.price,
          firstTime: point.time,
          lastTime: point.time
        })
      }
    }

    // Convert to array and sort by time
    const klineArray = Array.from(klineMap.entries()).map(([time, data]) => ({
      time,
      open: data.open,
      high: data.high,
      low: data.low,
      close: data.close,
    })).sort((a, b) => a.time - b.time)

    // Ensure price continuity: next candle's open = previous candle's close
    const result: KlineData[] = []
    let lastClose: number | null = null

    for (let i = 0; i < klineArray.length; i++) {
      const candle = klineArray[i]
      
      // For the first candle, use its original open price
      if (i === 0) {
        result.push(candle)
        lastClose = candle.close
      } else {
        // For subsequent candles, ensure open price equals previous close
        const adjustedCandle: KlineData = {
          time: candle.time,
          open: lastClose!, // Use previous candle's close as open
          high: Math.max(lastClose!, candle.high), // Adjust high if needed
          low: Math.min(lastClose!, candle.low),   // Adjust low if needed
          close: candle.close
        }
        
        result.push(adjustedCandle)
        lastClose = adjustedCandle.close
      }
    }

    // Fill missing intervals to ensure no gaps
    const filledResult = this.fillMissingIntervals(result, intervalSeconds)

    console.log(`Created ${filledResult.length} kline candles (${result.length} original, ${filledResult.length - result.length} filled)`)
    return filledResult
  }

  private fillMissingIntervals(klineData: KlineData[], intervalSeconds: number): KlineData[] {
    if (klineData.length === 0) return []

    const result: KlineData[] = []
    const sortedData = [...klineData].sort((a, b) => a.time - b.time)
    
    for (let i = 0; i < sortedData.length; i++) {
      const current = sortedData[i]
      result.push(current)
      
      // Check if there's a gap to the next candle
      if (i < sortedData.length - 1) {
        const next = sortedData[i + 1]
        const expectedNextTime = current.time + intervalSeconds
        
        // Fill missing intervals
        let fillTime = expectedNextTime
        while (fillTime < next.time) {
          // Create a candle with no price movement (open = high = low = close = previous close)
          const fillCandle: KlineData = {
            time: fillTime,
            open: current.close,
            high: current.close,
            low: current.close,
            close: current.close
          }
          result.push(fillCandle)
          fillTime += intervalSeconds
        }
      }
    }
    
    return result
  }
} 