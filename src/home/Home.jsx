import React from 'react';

// components
import Banner from './Banner';
import HomeCategory from './HomeCategory';
import CategoryShowCase from './CategoryShowCase';
import Register from './Register';
import LocationSprade from './LocationSprade';
import AboutUs from './AboutUS';

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <LocationSprade />
      <AboutUs />
    </div>
  );
};

export default Home;
