import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ setIsSidebarOpen }) => {
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

      


<Link to="/login">
      <button className="bg-green-500 cursor-pointer text-black px-5 py-2 rounded-full">
        Login
      </button>
</Link>
    </header>
  );
};

export default Navbar;