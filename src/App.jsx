import React from 'react';
import Slogan from './components/Slogan';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FoodItems from './components/FoodItems';
import Crafting from './components/Crafting';
import PopularItem from './components/PopularItem';
import CustomerSay from './components/CustomerSay';
import Resturant from './components/Resturant';
import Footer from './components/Footer';
import CopyRight from './components/CopyRight';
import Categories from './components/Categories';
import Faq from './components/Faq';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <FoodItems />
      <Crafting />
      <PopularItem />
      <CustomerSay />
      <Faq />
      <Resturant />
      <Footer />
      <CopyRight />
    </>
  );
};

export default App;
