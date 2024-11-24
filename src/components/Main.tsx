import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Hero from "./Hero";
import CategoryGallary from "./CategoryGallary";
import FlashSales from "./FlashSales";
import NewLaunch from "./NewLaunch";
import LifeStyle from "./LifeStyle";
import MustHave from "./MustHave";
import ExclusiveOffers from "./ExclusiveOffers";
import Features from "./Features";

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Hero />
      <CategoryGallary />
      <FlashSales />
      <NewLaunch />
      <LifeStyle />
      <MustHave />
      <ExclusiveOffers />
      <Features />
    </div>
  );
};

export default Main;
