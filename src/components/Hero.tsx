import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from "../assets/Images/person.png";
import headset1 from "../assets/Images/Frame 884.png";
import headset2 from "../assets/Images/Frame 885.png";
import headset3 from "../assets/Images/Frame 886.png";
import headset4 from "../assets/Images/Frame 887.png";
import headset5 from "../assets/Images/Frame 889.png";

const Hero: React.FC = () => {
  const Headsets = [headset1, headset2, headset3, headset4, headset1, headset5];

  const HeadphoneGallary = Headsets.map((h) => {
    return (
      <div>
        <img src={h} className="h-[100px] mb-5" />
        <p className="text-lg text-center">Category 1</p>
      </div>
    );
  });
  return (
    <div>
      <div className="flex justify-between items-center bg-gradient-to-r from-[#4f4d4d] to-[black] text-white">
        <div>
          <h1 className="text-[50px] font-bold mb-3">
            Up to 10% off <br />
            Voucher
          </h1>
          <div className="flex items-center gap-3  text-[22px]">
            <button className="underline underline-offset-[10px]">
              Shop Now
            </button>
            <FaArrowRight />
          </div>
        </div>
        <img src={img} className="h-[500px]" />
      </div>

      <div className="grid grid-cols-6 justify-center gap-14 mt-12">
        {HeadphoneGallary}
      </div>
    </div>
  );
};

export default Hero;
