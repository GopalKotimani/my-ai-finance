// src/pages/Dashboard.jsx
import React from 'react';
import { useExpenses } from '../context/ExpenseContext';
import { calculateTotalSpent, getCategorySummary } from '../utils/calculations';
import CategoryPieChart from '../components/charts/CategoryPieChart';
import ExpenseTable from '../components/tables/ExpenseTable'; // For quick view

const Dashboard = () => {
  const { expenses } = useExpenses();
  const totalSpent = calculateTotalSpent(expenses);
  const categoryData = getCategorySummary(expenses);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* DashboardCard component (simplified for now) [cite: 208] */}
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Total Spent (Month)</h3>
          <p className="text-3xl font-bold text-red-600">${totalSpent.toFixed(2)}</p>
        </div>
        {/* Other cards like Wallet Balance, Budget Remaining */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Spending by Category</h2>
          <CategoryPieChart data={categoryData} />
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          {/* Show a few recent expenses */}
          <ExpenseTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;