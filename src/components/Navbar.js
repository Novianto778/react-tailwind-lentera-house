import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex py-4">
      <div className="container w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <img
            src="/img/logo.png"
            alt="logo"
            width="40"
            className="cursor-pointer"
          />
          <ul className="hidden md:flex">
            <li className="nav-item font-bold text-black">Home</li>
            <li className="nav-item text-gray-400 hover:text-gray-600">
              Location
            </li>
            <li className="nav-item text-gray-400 hover:text-gray-600">
              Success
            </li>
            <li className="nav-item text-gray-400 hover:text-gray-600">
              Features
            </li>
            <li className="nav-item text-gray-400 hover:text-gray-600">
              Account
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
