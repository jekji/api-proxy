# Kline API

A Next.js API for retrieving historical kline (candlestick) data from InfluxDB in TradingView-compatible format.

## Features

- RESTful API for historical kline data
- Multiple time intervals (1m, 3m, 5m, 15m, 1h, 4h, 1d)
- TradingView-compatible OHLC format
- InfluxDB integration
- TypeScript support

### Set environment variables:
```bash
export INFLUXDB_URL="https://us-east-1-1.aws.cloud2.influxdata.com"
export INFLUXDB_TOKEN="XYv8i6y4Z6lTtLB3x69_5UqfMSq7PWVZqY1suHRzS8Aea4rOnvaSxtQiXA1jRenZ7u6cYgF63SIGgzcLYe7J6A=="
export INFLUXDB_ORG="jekji"
export INFLUXDB_BUCKET="kline"
```

## API Endpoint

### GET /api/kline

Retrieves historical kline data for a specified symbol and interval.

#### Parameters

- **symbol** (required): Trading symbol
  - Crypto: `BTCUSD`, `ETHUSD`, `SOLUSD`, `XRPUSD`, `LINKUSD`
  - Equities: `AAPLUSD`, `AMZNUSD`, `GOOGUSD`, `MSFTUSD`, `TSLAUSD`
  - Forex: `AUDUSD`, `EURUSD`, `GBPUSD`, `NZDUSD`
  - Commodities: `USOILSPOT`, `XAGUSD`, `XAUUSD`

- **interval** (required): Time interval
  - `1m` - 1 minute
  - `3m` - 3 minutes
  - `5m` - 5 minutes
  - `15m` - 15 minutes
  - `1h` - 1 hour
  - `4h` - 4 hours
  - `1d` - 1 day

- **from** (optional): Start timestamp in Unix seconds
- **to** (optional): End timestamp in Unix seconds
- **limit** (optional): Maximum number of data points (default: 1000)

#### Example Requests

```bash
# Get 1-minute BTC/USD data
curl "http://localhost:3000/api/kline?symbol=BTCUSD&interval=1m"

# Get hourly ETH/USD data for a specific time range
curl "http://localhost:3000/api/kline?symbol=ETHUSD&interval=1h&from=1640995200&to=1641081600"

# Get daily data with limit
curl "http://localhost:3000/api/kline?symbol=BTCUSD&interval=1d&limit=30"
```

#### Response Format

```json
{
  "symbol": "BTCUSD",
  "interval": "1m",
  "data": [
    {
      "time": 1640995200,
      "open": 47000.0,
      "high": 47500.0,
      "low": 46800.0,
      "close": 47200.0,
      "volume": 0
    }
  ]
}
```

#### Error Responses

```json
// Missing parameters
{
  "error": "Missing required parameter: symbol"
}

// Invalid interval
{
  "error": "Invalid interval. Must be one of: 1m, 3m, 5m, 15m, 1h, 4h, 1d"
}

// Server error
{
  "error": "Internal server error"
}
```

## Data Source

This API reads data that has been collected by the Go streaming service from Pyth Network and stored in InfluxDB. The data includes:

- Real-time price feeds from cryptocurrency, equity, forex, and commodity markets
- High-frequency updates (typically sub-second)
- Aggregated into OHLC format for the requested time intervals