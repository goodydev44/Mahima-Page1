import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img from '../assets/Images/person.png'

const Hero: React.FC = () => {
    const list = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            <div className="flex justify-between items-center bg-gradient-to-r from-[#4f4d4d] to-[black] text-white">
                <div>
                    <h1 className="text-[34px] font-bold mb-3">Up to 10% off <br />Voucher</h1>
                    <div className="flex items-center gap-3">
                        <button className="underline underline-offset-[6px]">Shop Now</button>
                        <FaArrowRight />
                    </div>
                </div>
                <img src={img}
                    className="h-[400px]" />
            </div>

            <div></div>
        </div>
    );
};

export default Hero;
