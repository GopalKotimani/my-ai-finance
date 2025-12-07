// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { ExpenseProvider } from './context/ExpenseContext';
// Import all other pages...

function App() {
  return (
    <BrowserRouter>
    <ExpenseProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes (Will be protected with middleware in Phase 4) */}
        <Route path="/" element={<Dashboard />} /> 
        {/* Add routes for /expenses, /wallets, /budgets, /insights */}
      </Routes>
      </ExpenseProvider>
    </BrowserRouter>
  );
}

export default App;