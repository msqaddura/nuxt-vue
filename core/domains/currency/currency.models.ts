export type Currency = {
  name: string
  amount: string
  amountEur: string
  symbol: string
}

type Alert = {
  targetPriceEur: string
  percentsToChange: string
  isHigher: boolean
}
type History = {
  change: {
    amount: string
    percent: string
    isUpdated: boolean
  }
  priceData: [number, number][]
}

export type Range = '1D' | '7D' | '1M' | '3M' | 'YTD' | 'ALL'

export type Token = Pick<Currency, 'name' | 'symbol'> & {
  price: string
  maxSupply: string
  circulatingSupply: string
  marketCap: string
  allTimeHigh: string
  description: string
  alerts: Alert[]
  priceHistory: Record<Range, History>
}
