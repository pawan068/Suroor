import { Menu, Search, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";


const Navbar = ({ setIsSidebarOpen }) => {
  const { user, loading, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    setShowMenu(false);
    navigate("/login");
  };
  

  return (
    <header className="h-16 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between px-4 md:px-8">

      <div className="flex items-center gap-3">

        <button
          className="lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>

        <h1 className="text-2xl font-bold text-green-500 lg:hidden">
          Suroor
        </h1>

      </div>

      {loading ? null : user ? (
        <div className="relative">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
  src={user.avatar}
  alt={user.name}
  referrerPolicy="no-referrer"
  className="w-9 h-9 rounded-full object-cover"
/>

          </button>

      

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-800">
                <p className="text-sm font-medium truncate">{user.name}</p>
                <p className="text-xs text-zinc-400 truncate">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-zinc-800 transition-colors"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <button className="bg-green-500 cursor-pointer text-black px-5 py-2 rounded-full">
            Login
          </button>
        </Link>
      )}
    </header>
  );
};

export default Navbar;