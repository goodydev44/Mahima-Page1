import React from "react";
import WinSizeTracker from "./WinSizeTracker";
import Header from "./Header";
import NavBar from "./NavBar";

const Main: React.FC = () => {
  return (
    <div>
      <WinSizeTracker />
      <Header />
      <NavBar />
    </div>
  );
};

export default Main;
