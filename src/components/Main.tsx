import React from "react";
import WinSizeTracker from "./WinSizeTracker";
import Header from "./Header";
import NavBar from "./NavBar";
import Hero from "./Hero";

const Main: React.FC = () => {
  return (
    <div>
      <WinSizeTracker />
      <Header />
      <NavBar />
      <Hero />
    </div>
  );
};

export default Main;
