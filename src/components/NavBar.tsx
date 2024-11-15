import React from "react";
import { BiCart } from 'react-icons/bi'
import { FaRegHeart, FaHeart, FaSearch } from 'react-icons/fa'

const NavBar: React.FC = () => {
  return (
    <nav className="contain flex xs:flex-col xl:flex-row justify-between gap-y-5">
      <div className="flex items-center xl:justify-center">
        <button className="px-10 py-2.5 bg-[#bdbdbd]">Logo</button>
        <ul className="flex gap-2 items-center">
          <li className="nav-style">Home</li>
          <li className="nav-style">About Us</li>
          <li className="nav-style">Product</li>
          <li className="nav-style">Personalization</li>
          <li className="nav-style">More</li>
        </ul>
      </div>

      <div className="flex items-center xl:gap-6 xl:justify-center">
        <input
          type="text"
          placeholder="What are you looking for? "
          className="bg-gray-100 py-2 px-[18px] rounded-full"
        />
        <FaRegHeart className="cursor-pointer text-2xl"/>
        <BiCart className="cursor-pointer text-3xl"/>
      </div>
    </nav>
  );
};

export default NavBar;
