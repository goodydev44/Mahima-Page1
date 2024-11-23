import React from "react";
import { BiCart } from 'react-icons/bi'
import { FaRegHeart, FaSearch } from 'react-icons/fa'

const NavBar: React.FC = () => {
  return (
    <nav className="contain flex xs:items-center xl:justify-between my-4 mobile:flex-col xl:flex-row gap-5">
      <div className="flex items-center text-[15px]">
        <button className="px-10 py-2.5 bg-[#bdbdbd] mr-10">Logo</button>
        <ul className="Grid--style items-center">
          <li className="nav-style">Home</li>
          <li className="nav-style">About Us</li>
          <li className="nav-style">Product</li>
          <li className="nav-style">Personalization</li>
          <li className="nav-style">More</li>
        </ul>
      </div>

      <div className="flex items-center gap-6 min-w-[50]">
        <div className="flex items-center px-[10px] bg-gray-100 rounded-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 py-2 px-[10px] md:w-[350px] xl:w-[250px] rounded-full outline-none"
          />
          <FaSearch className="text-2xl" />
        </div>
        <FaRegHeart className="cursor-pointer text-2xl" />
        <BiCart className="cursor-pointer text-3xl" />
      </div>
    </nav>
  );
};

export default NavBar;
