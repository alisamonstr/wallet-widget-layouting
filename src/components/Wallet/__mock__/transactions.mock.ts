import { subDays } from 'date-fns'

export const transactionsData = [
  {
    date: Date.now(),
    transactions: [
      { type: 'withdraw', status: 'pending', balance: 0.084643, amount: 0.00423 },
      { type: 'deposit', status: 'ok', balance: 0.084643, amount: 0.00423 },
      { type: 'conversion', status: 'ok', balance: 0.084643, amount: 0.00423 },
    ],
  },
  {
    date: subDays(new Date(), 1).getTime(),
    transactions: [
      { type: 'transfer', status: 'failed', balance: 0.084643, amount: 0.00423 },
      { type: 'conversion', status: 'ok', balance: 0.084643, amount: 0.00423 },
      { type: 'withdraw', status: 'failed', balance: 0.084643, amount: 0.00423 },
      { type: 'deposit', status: 'ok', balance: 0.084643, amount: 0.00423 },
    ],
  },
]
