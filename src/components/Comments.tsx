import React from "react";
import Img from "../assets/Images/Ellipse 4.png"

const Comments: React.FC = () => {
  return (
    <div className="contain mb-32">
      <h1 className="text-4xl text-center font-bold mb-12">Our Costumers Says</h1>

      <div className="text-center flex gap-x-10 overflow-x-scroll">
        <div className="bg-[#f6f6f6] min-w-[550px] rounded-2xl blur-[2px]] px-10 py-8">
          <img src={Img} className="inline-block" />
          <h4 className="font-bold text-lg">JethaLal Gada</h4>
          <p className="text-sm font-medium">
            Love my new Apple Airpods! It's sleek, packed with features, and has
            great battery life. Highly recommend!
          </p>
        </div>

        <div className="bg-[#f6f6f6] min-w-[550px] rounded-2xl px-10 py-8 item -mx-[50%]]">
          <img src={Img} className="inline-block" />
          <h4 className="font-bold text-lg">JethaLal Gada</h4>
          <p className="text-sm font-medium">
            Love my new Apple Airpods! It's sleek, packed with features, and has
            great battery life. Highly recommend!
          </p>
        </div>

        <div className="bg-[#f6f6f6] min-w-[550px] back rounded-2xl blur-[2px]] px-10 py-8">
          <img src={Img} className="inline-block" />
          <h4 className="font-bold text-lg">JethaLal Gada</h4>
          <p className="text-sm font-medium">
            Love my new Apple Airpods! It's sleek, packed with features, and has
            great battery life. Highly recommend!
          </p>
        </div>
      </div>
    </div>
  );
};


export default Comments;
