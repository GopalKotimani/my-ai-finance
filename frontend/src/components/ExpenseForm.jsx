// src/components/ExpenseForm.jsx
import React, { useState } from 'react';
import { useExpenses } from '../context/ExpenseContext';

const ExpenseForm = ({ onClose }) => {
  const { addExpense } = useExpenses();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Groceries');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0], // simple date mock
      note,
      walletId: 'w1', // default wallet for mock
    });
    onClose(); // Close modal/form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <h3 className="text-xl font-bold mb-4">Add New Expense</h3>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required className="w-full p-2 mb-3 border" />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 mb-3 border">
        <option>Groceries</option>
        <option>Subscriptions</option>
        <option>Transport</option>
        <option>Entertainment</option>
        {/* Add more categories */}
      </select>
      <input type="text" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Note (Optional)" className="w-full p-2 mb-4 border" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save Expense</button>
    </form>
  );
};

export default ExpenseForm;