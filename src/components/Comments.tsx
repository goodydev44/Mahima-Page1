import React from "react";
import Img from "../assets/Images/Ellipse 4.png"

const Comments: React.FC = () => {
  return (
    <div className="contain mb-32">
      <h1 className="text-4xl text-center font-bold mb-12">Our Costumers Says</h1>

      <div className="text-center h-[300px] flex mobile:flex-col xs:flex-row overflow-auto gap-x-10 gap-y-3">
        <div className="bg-[#f6f6f6] mobile:min-w-[300px] xs:min-w-[450px] sm:min-w-[550px] rounded-2xl px-10 py-8">
          <img src={Img} className="inline-block" />
          <h4 className="font-bold text-lg">JethaLal Gada</h4>
          <p className="text-sm font-medium">
            Love my new Apple Airpods! It's sleek, packed with features, and has
            great battery life. Highly recommend!
          </p>
        </div>

        <div className="bg-[#f6f6f6] mobile:min-w-[300px] xs:min-w-[450px] sm:min-w-[550px] rounded-2xl px-10 py-8 item">
          <img src={Img} className="inline-block" />
          <h4 className="font-bold text-lg">JethaLal Gada</h4>
          <p className="text-sm font-medium">
            Love my new Apple Airpods! It's sleek, packed with features, and has
            great battery life. Highly recommend!
          </p>
        </div>

        <div className="bg-[#f6f6f6] mobile:min-w-[300px] xs:min-w-[450px] sm:min-w-[550px] back rounded-2xl px-10 py-8">
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
