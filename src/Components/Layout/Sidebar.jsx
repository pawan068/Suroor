import { NavLink } from "react-router-dom";
import {
  House,
  Search,
  Library,
  User,
  X,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const navItems = [
    { name: "Home", path: "/", icon: House },
    { name: "Search", path: "/search", icon: Search },
    { name: "Library", path: "/library", icon: Library },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-full
          w-64
          bg-zinc-900
          border-r border-zinc-800
          p-5
          z-50
          transform
          transition-transform
          duration-300
          flex flex-col
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* Mobile Close */}

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-3xl font-bold text-green-500">
            Suroor
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X />
          </button>

        </div>

        <nav className="space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? "bg-green-500"
                      : "hover:bg-zinc-800"
                  }`
                }
              >
                <Icon size={22} />
                {item.name}
              </NavLink>
            );
          })}

        </nav>

      </aside>
    </>
  );
};

export default Sidebar;