import React from 'react';
import PopularItem from './PopularItem';

const MostPopular = () => {
  return (
    <div className="w-10/12 mx-auto mt-24 ">
      <div className="w-72 mx-auto">
        <h1 className="text-center font-bold text-3xl">Most People Go</h1>
        <p className="text-gray-500 text-center mt-4 text-lg">
          From nature to heart and becomes all what we need to have
        </p>
      </div>
      <div className="flex lg:justify-between mt-10 flex-wrap justify-evenly">
        <PopularItem
          name="Lembang, Bandung"
          src="/img/top-1.png"
          rating={4.5}
          price={850}
        />
        <PopularItem
          name="Angga Centre, Jakarta"
          src="/img/top-2.png"
          rating={4.8}
          price={999}
        />
        <PopularItem
          name="Ahya, France"
          src="/img/top-3.png"
          rating={5}
          price={1250}
        />
        <PopularItem
          name="Koko, Jamaica"
          src="/img/top-4.png"
          rating={4.2}
          price={450}
        />
      </div>
    </div>
  );
};

export default MostPopular;
