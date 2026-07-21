import { Menu, Search } from "lucide-react";

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

      <div className="hidden md:flex items-center bg-zinc-800 rounded-full px-4 py-2 w-full max-w-lg mx-8">

        <Search size={18} />

        <input
          placeholder="Search songs..."
          className="bg-transparent outline-none px-3 w-full"
        />

      </div>

      <button className="bg-green-500 text-black px-5 py-2 rounded-full">
        Login
      </button>

    </header>
  );
};

export default Navbar;