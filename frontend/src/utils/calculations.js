// src/utils/calculations.js
export const calculateTotalSpent = (expenses) => {
  return expenses.reduce((sum, exp) => sum + exp.amount, 0);
};

export const getCategorySummary = (expenses) => {
  const summary = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  // Convert object to array for Recharts
  return Object.keys(summary).map(category => ({
    name: category,
    value: summary[category],
  }));
};

// Placeholder for other calculations (e.g., monthly summary)
export const getMonthlySummary = (expenses) => {
  // Logic for grouping expenses by month goes here...
  return [
    { month: 'Nov', spend: 1000 },
    { month: 'Dec', spend: 1500 }
  ];
};