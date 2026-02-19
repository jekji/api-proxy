import { NextRequest, NextResponse } from 'next/server'
import { KlineService } from './kline-service'
import { isValidInterval } from './types'

const klineService = new KlineService()

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const symbol = searchParams.get('symbol')
    const interval = searchParams.get('interval')
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const limit = searchParams.get('limit')

    // Validate required parameters
    if (!symbol) {
      return NextResponse.json(
        { error: 'Missing required parameter: symbol' },
        { status: 400 }
      )
    }

    if (!interval) {
      return NextResponse.json(
        { error: 'Missing required parameter: interval' },
        { status: 400 }
      )
    }

    if (!isValidInterval(interval)) {
      return NextResponse.json(
        { error: `Invalid interval. Must be one of: 1m, 3m, 5m, 15m, 1h, 4h, 1d` },
        { status: 400 }
      )
    }

    // Parse optional parameters
    const fromTimestamp = from ? parseInt(from, 10) : undefined
    const toTimestamp = to ? parseInt(to, 10) : undefined
    const limitNumber = limit ? parseInt(limit, 10) : 1000

    // Validate timestamps
    if (from && isNaN(fromTimestamp!)) {
      return NextResponse.json(
        { error: 'Invalid from timestamp' },
        { status: 400 }
      )
    }

    if (to && isNaN(toTimestamp!)) {
      return NextResponse.json(
        { error: 'Invalid to timestamp' },
        { status: 400 }
      )
    }

    if (limit && isNaN(limitNumber)) {
      return NextResponse.json(
        { error: 'Invalid limit value' },
        { status: 400 }
      )
    }

    // Get kline data
    const klineData = await klineService.getKlineData(
      symbol.toUpperCase(),
      interval,
      fromTimestamp,
      toTimestamp,
      limitNumber
    )

    // Transform data to TradingView format
    const tradingViewData = klineData.map(candle => ({
      time: candle.time,
      open: candle.open,
      high: candle.high,
      low: candle.low,
      close: candle.close,
      volume: candle.volume || 0
    }))

    return NextResponse.json({
      symbol: symbol.toUpperCase(),
      interval,
      data: tradingViewData
    })

  } catch (error) {
    console.error('Error fetching kline data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 