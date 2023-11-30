import React, { useState } from "react";

const SidebarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex h-screen sticky top-0 bg-gray-200 ${
        isOpen ? "overflow-hidden" : ""
      }`}
    >
      <nav
        className={`bg-gray-800 w-64 ${isOpen ? "block" : "hidden"} sm:block`}
      >
        <div className="flex items-center justify-center mt-6">
          <span className="text-white text-2xl font-semibold">Sidebar</span>
        </div>
        <div className="mt-10">
          <a
            href="#"
            className="text-gray-300 py-2 px-4 block bg-gray-700 hover:bg-gray-700 hover:text-white"
          >
            Dashboard Overview
          </a>
          <a
            href="#"
            className="text-gray-300 py-2 px-4 block hover:bg-gray-900 hover:text-white"
          >
            Project Details
          </a>
          <a
            href="#"
            className="text-gray-300 py-2 px-4 block hover:bg-gray-900 hover:text-white"
          >
            Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default SidebarComp;
