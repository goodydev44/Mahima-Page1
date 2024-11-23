import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../assets/Images/person.png";

const Hero: React.FC = () => {
  return (
    <div className="contain bg-gradient-to-r from-[#4f4d4d] to-[black]">
      <div className="flex mobile:flex-col sm:flex-row justify-between items-center text-white
            pt-16">
        <div>
          <h1 className="text-[50px] font-bold mb-3">
            Up to 10% off <br />
            Voucher
          </h1>
          <div className="flex items-center gap-3 text-[22px]">
            <button className="underline underline-offset-[10px]">
              Shop Now
            </button>
            <FaArrowRight />
          </div>
        </div>
        
        <img src={img} className="mobile:h-[400px] sm:h-[500px]" />
      </div>
    </div>
  );
};

export default Hero;
