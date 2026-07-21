import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen bg-black text-white flex flex-col">

      <div className="flex flex-1 overflow-hidden">

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex-1 flex flex-col overflow-hidden">

          <Navbar
            setIsSidebarOpen={setIsSidebarOpen}
          />

          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {children}
          </main>

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Layout;