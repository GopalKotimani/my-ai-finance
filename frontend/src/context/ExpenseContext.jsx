// src/context/ExpenseContext.jsx
import React, { createContext, useReducer, useContext } from 'react';
import { mockExpenses } from '../data/mockData';

const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // Generate a unique ID for the mock data
      const newId = 'e' + (state.length + 1) + Date.now(); 
      return [{ ...action.payload, id: newId }, ...state];
    case 'UPDATE_EXPENSE':
      return state.map(exp =>
        exp.id === action.payload.id ? { ...exp, ...action.payload.updates } : exp
      );
    case 'DELETE_EXPENSE':
      return state.filter(exp => exp.id !== action.payload.id);
    case 'SET_EXPENSES': // For initial load
      return action.payload;
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, mockExpenses);

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD_EXPENSE', payload: expenseData });
  };

  const updateExpense = (id, updates) => {
    dispatch({ type: 'UPDATE_EXPENSE', payload: { id, updates } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: { id } });
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, updateExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom hook for consuming the context (professional practice) [cite: 57]
export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};