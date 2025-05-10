import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import CreateDelivery from './Pages/CreateDelivery';
import MainLayout from './components/MainLayout';

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {isAuthenticated === 'demo-token' && (
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-deliveries" element={<CreateDelivery />} />
          </Route>
        )}

        {isAuthenticated !== 'demo-token' && (
          <>
            <Route path="/dashboard" element={<Navigate to="/" />} />
            <Route path="/create-deliveries" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
