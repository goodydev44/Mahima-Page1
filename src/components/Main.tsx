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
import Comments from "./Comments";
import Section from "./Section";
import Footer from "./Footer";

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
      <Comments />
      <Section />
      <Footer />
    </div>
  );
};

export default Main;
