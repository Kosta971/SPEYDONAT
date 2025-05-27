import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DonatePage from './pages/DonatePage';
import Dashboard from './pages/Dashboard';
import Widget from './pages/Widget';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donate/:username" element={<DonatePage />} />
        <Route path="/widget/:streamerId" element={<Widget />} />
      </Routes>
    </Router>
  );
}
