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
          <svg
            className="block md:hidden w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>

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
