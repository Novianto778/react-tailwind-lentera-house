import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Partner from './components/Partner';
import MostPopular from './components/MostPopular';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Partner />
      <MostPopular />
      <Footer />
    </>
  );
};

export default App;
