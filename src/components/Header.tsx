import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link
        to="/dashboard"
        className="text-2xl cursor-pointer font-bold text-blue-600"
      >
        Logo
      </Link>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Log out
      </button>
    </header>
  );
};

export default Header;
