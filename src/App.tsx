import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import CreateUser from './Pages/CreateUserPage';
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
            <Route path="/create-user" element={<CreateUser />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
