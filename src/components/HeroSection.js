import React from 'react';

const HeroSection = () => {
  return (
    <div className="container w-10/12 mx-auto flex items-center mt-2">
      <div className="w-5/12">
        <h1 className="font-semibold text-5xl w-full leading-tight">
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
        <div className="bg-gray-100 px-4 py-2 font-semibold max-w-sm">
          Sawangan Golf, Padalarang
        </div>
        <button className="mt-4 px-6 py-2 bg-red-400 text-white">Explore Now</button>
      </div>
      <div className="w-6/12 ml-auto">
        <img src="/img/banner.png" alt="lentera house" className="w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
