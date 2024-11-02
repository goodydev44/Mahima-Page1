import React from "react";
import { BiHeart, BiCart } from 'react-icons/bi'

const NavBar: React.FC = () => {
  return (
    <nav className="contain flex justify-between">
      <div className="flex items-center justify-evenly gap-10">
        <button className="px-10 py-3 bg-[#bdbdbd] ">Logo</button>
        <ul className="inline-grid lg:grid-cols-3 xl:grid-cols-3 gap-x-7 gap-y-1">
          <li>Home</li>
          <li>About Us</li>
          <li>Product</li>
          <li>Personalization</li>
          <li>More</li>
        </ul>
      </div>

      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-gray-200 py-2 px-[18px] rounded-full"
        />
        <BiHeart className="cursor-pointer text-2xl"/>
        <BiCart className="cursor-pointer text-3xl"/>
      </div>
    </nav>
  );
};

export default NavBar;
