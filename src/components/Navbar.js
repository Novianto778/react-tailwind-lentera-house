import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex py-4">
      <div className="container w-10/12 mx-auto">
        <div className="flex items-center justify-between">
          <img src="/img/logo.png" alt="logo" width="40" className="cursor-pointer" />
          <ul className="hidden md:flex">
            <li className="ml-10 cursor-pointer font-bold text-lg">Home</li>
            <li className="ml-10 cursor-pointer text-gray-400 text-lg">Location</li>
            <li className="ml-10 cursor-pointer text-gray-400 text-lg">Success</li>
            <li className="ml-10 cursor-pointer text-gray-400 text-lg">Features</li>
            <li className="ml-10 cursor-pointer text-gray-400 text-lg">Account</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
