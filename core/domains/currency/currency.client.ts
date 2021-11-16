import { Currency, Token } from './currency.models'

const URL = 'http://localhost:4000'

export const getCurrencies = async (): Promise<Currency[]> => {
  return await fetch(`${URL}/currencies`).then((res) => res.json())
}

export const getCurrencyByName = async (name: string): Promise<Token> => {
  return await fetch(`${URL}/tokens/${name}`).then((res) => res.json())
}
