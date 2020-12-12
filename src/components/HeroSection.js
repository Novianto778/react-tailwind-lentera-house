import React from 'react';

const HeroSection = () => {
  return (
    <div className="container w-11/12 ml-auto flex items-center mt-2 flex-col md:flex-row">
      <div className="md:w-5/12 w-full">
        <h1 className="font-semibold text-4xl md:text-5xl w-11/12 leading-tight">
          We have thousand of your dream home
        </h1>
        <p className="text-gray-500 mt-6 max-w-sm text-lg">
          A light that will guide you to find what you’ve been looking for long
          long time ago
        </p>
        <div className="flex mt-8">
          <div className="mr-12">
            <h2 className="text-2xl">
              18<span className="text-blue-400">K</span>
            </h2>
            <p className="text-gray-400">apartement</p>
          </div>
          <div className="mr-12">
            <h2 className="text-2xl">
              52<span className="text-blue-400">K</span>
            </h2>
            <p className="text-gray-400">success</p>
          </div>
          <div className="mr-12">
            <h2 className="text-2xl">
              14<span className="text-blue-400">M</span>
            </h2>
            <p className="text-gray-400">transactions</p>
          </div>
        </div>
        <h4 className="text-gray-500 mt-6">Location</h4>
        <div className="bg-gray-100 px-4 py-2 font-semibold max-w-sm shadow">
          Sawangan Golf, Padalarang
        </div>
        <div className="mt-6 px-6 py-2 bg-red-400 text-white outline-none inline-block cursor-pointer hover:bg-red-500 transition duration-300 ">Explore Now</div>
      </div>
      <div className="md:w-7/12 ml-auto w-full">
        <img src="/img/banner.png" alt="lentera house" className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
