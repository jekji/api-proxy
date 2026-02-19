export interface KlineData {
  time: number
  open: number
  high: number
  low: number
  close: number
  volume?: number
}

export interface KlineRequest {
  symbol: string
  interval: string
  from?: number
  to?: number
  limit?: number
}

export type Interval = '1m' | '3m' | '5m' | '15m' | '1h' | '4h' | '1d'

export const VALID_INTERVALS: Interval[] = ['1m', '3m', '5m', '15m', '1h', '4h', '1d']

export function isValidInterval(interval: string): interval is Interval {
  return VALID_INTERVALS.indexOf(interval as Interval) !== -1
}

export function getIntervalDuration(interval: Interval): number {
  const durations: Record<Interval, number> = {
    '1m': 60,
    '3m': 180,
    '5m': 300,
    '15m': 900,
    '1h': 3600,
    '4h': 14400,
    '1d': 86400,
  }
  return durations[interval]
} 