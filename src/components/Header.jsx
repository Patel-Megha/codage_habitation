import React from "react";

const Header = ({ setSearchQuery }) => {

  return (
    <nav className="bg-purple-200">
      <div className="max-w-[1420px] m-auto w-[90%] justify-evenly flex items-center py-2">
        <p className="text-4xl">Logo</p>
        <div className="relative flex items-center">
          <input
            type="text"
            className="border-black border-1 rounded-2xl pl-8 py-1 "
            placeholder="Search Posts..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="absolute left-1">🔍</span>
        </div>
        <div className="hidden md:flex text-red-800 gap-16 text-xl cursor-pointer  py-3 list-none justify-center text-center">
          Login
        </div>
      </div>
    </nav>
  );
};

export default Header;
