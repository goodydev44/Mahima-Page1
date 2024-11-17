import React from "react";
import { BiCart } from 'react-icons/bi'
import { FaRegHeart, FaHeart, FaSearch } from 'react-icons/fa'

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between my-4">
      <div className="flex items-center">
        <button className="px-10 py-2.5 bg-[#bdbdbd]">Logo</button>
        <ul className="inline-grid grid-cols-3 gap- items-center">
          <li className="nav-style">Home</li>
          <li className="nav-style">About Us</li>
          <li className="nav-style">Product</li>
          <li className="nav-style">Personalization</li>
          <li className="nav-style">More</li>
        </ul>
      </div>

      <div className="flex items-center gap-6">
        <div className="cursor-text flex items-center px-[10px] bg-gray-100  rounded-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 py-2 px-[10px] rounded-full outline-none"
          />
          <FaSearch className="text-2xl -ml-11" />
        </div>
        <FaRegHeart className="cursor-pointer text-2xl" />
        <BiCart className="cursor-pointer text-3xl" />
      </div>
    </nav>
  );
};

export default NavBar;
