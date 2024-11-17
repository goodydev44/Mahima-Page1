import React from "react";
// import WinSizeTracker from "./WinSizeTracker";
import Header from "./Header";
import NavBar from "./NavBar";
import Hero from "./Hero";
import FlashSales from "./FlashSales";
import NewLaunch from "./NewLaunch";
import LifeStyle from "./LifeStyle";
import MustHave from "./MustHave";
import ExclusiveOffers from "./ExclusiveOffers";
import Footer from "./Footer";

const Main: React.FC = () => {
  return (
    <div>
      {/* <WinSizeTracker /> */}
      <Header />
      <NavBar />
      <Hero />
      <FlashSales />
      <NewLaunch />
      <LifeStyle />
      <MustHave />
      <ExclusiveOffers />
      <Footer />
    </div>
  );
};

export default Main;
