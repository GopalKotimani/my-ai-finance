// src/components/tables/ExpenseTable.jsx
import React from 'react';
import { useExpenses } from '../../context/ExpenseContext';

const ExpenseTable = () => {
  const { expenses, deleteExpense } = useExpenses();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Amount</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{expense.date}</td>
              <td className="py-2 px-4 border">{expense.category}</td>
              <td className="py-2 px-4 border">${expense.amount.toFixed(2)}</td>
              <td className="py-2 px-4 border">
                <button onClick={() => alert('Mock Edit: Not implemented yet')} className="text-blue-500 mr-2">Edit</button>
                <button onClick={() => deleteExpense(expense.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {expenses.length === 0 && <p className="text-center p-4">No expenses recorded.</p>}
    </div>
  );
};

export default ExpenseTable;