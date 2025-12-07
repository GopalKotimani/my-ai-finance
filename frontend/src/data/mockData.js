// src/data/mockData.js
export const mockExpenses = [
  { id: 'e1', amount: 550, category: 'Groceries', date: '2025-11-20', note: 'Weekly shopping', walletId: 'w1' },
  { id: 'e2', amount: 120, category: 'Subscriptions', date: '2025-11-21', note: 'Netflix', walletId: 'w2' },
  { id: 'e3', amount: 300, category: 'Transport', date: '2025-11-22', note: 'Gas refill', walletId: 'w1' },
  { id: 'e4', amount: 80, category: 'Groceries', date: '2025-11-23', note: 'Milk and Bread', walletId: 'w1' },
  { id: 'e5', amount: 250, category: 'Entertainment', date: '2025-11-24', note: 'Movie tickets', walletId: 'w3' },
];

export const mockWallets = [
  { id: 'w1', name: 'Cash', balance: 5000, currency: 'USD' },
  { id: 'w2', name: 'Bank Account', balance: 12500, currency: 'USD' },
  { id: 'w3', name: 'Credit Card', balance: 1500, currency: 'USD' },
];