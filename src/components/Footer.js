import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-20 md:flex-row flex flex-col-reverse items-center">
      <div className="lg:w-7/12 w-full bg-gray-100 py-16 pl-20 rounded-tr-3xl">
        <h2 className="font-bold text-3xl md:text-4xl">
          Become a part <br /> of our community
        </h2>
        <p className="md:w-1/2 w-full mt-4 md:text-xl text-lg text-gray-500">
          Grow and live together to pursue happiness that we always dreaming of
        </p>
        <div className="flex mt-6">
          <img
            src="/img/appstore.png"
            alt="appstore"
            className="mr-6 block h-10"
          />
          <img
            src="/img/playstore.png"
            alt="playstore"
            className="block h-10"
          />
        </div>
      </div>
      <div className="absolute left-1/2 z-10 w-7/12 -ml-20 xl:-ml-36 mx-auto hidden lg:flex">
        <div className="relative mr-24 mt-8">
          <img src="/img/pic-2.png" alt="review" className="block h-52" />
          <div className="absolute top-1/2 left-1/3 message-shape pl-2 py-3 h-24 w-40 bg-gray-200">
            <h6 className="font-semibold mt-4">Sabrina Kuku</h6>
            <p className="text-gray-600 text-xs">
              My new family ever and thanks to Lentera
            </p>
          </div>
        </div>
        <div className="relative mr-24 mt-8">
          <img src="/img/pic-1.png" alt="review" className="block h-52" />
          <div className="absolute top-1/2 left-1/3 message-shape pl-2 py-3 h-24 w-40 bg-gray-200">
            <h6 className="font-semibold mt-4">Just Thin</h6>
            <p className="text-gray-600 text-xs">
              Now I can make a true real passive income from houses
            </p>
          </div>
        </div>
        <div className="relative mt-8 xl:block hidden">
          <img src="/img/pic.png" alt="review" className="block h-52" />
          <div className="absolute top-1/2 left-1/3 message-shape pl-2 py-3 h-24 w-40 bg-gray-200">
            <h6 className="font-semibold mt-4">Chin Kya</h6>
            <p className="text-gray-600 text-xs">
              The way I rent was so faaast and can’t belive it, thanks
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
