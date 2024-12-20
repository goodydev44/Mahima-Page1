import React from 'react'
import headset1 from "../assets/Images/Frame 884.png";
import headset2 from "../assets/Images/Frame 885.png";
import headset3 from "../assets/Images/Frame 886.png";
import headset4 from "../assets/Images/Frame 887.png";
import headset5 from "../assets/Images/Frame 889.png";
import { nanoid } from 'nanoid'

const CategoryGallary: React.FC = () => {
  const Headsets = [headset1, headset2, headset3, headset4, headset1, headset5];

  const HeadphoneGallary = Headsets.map((h) => {
    return (
      <div key={nanoid()} className='flex flex-col justify-center items-center text-center'>
        <img src={h} className="h-[100px] mb-4" />
        <p className="text-[15px] font-medium">Category 1</p>
      </div>
    );
  });
  return (
    <div className="contain grid mobile:grid-cols-2 xs:grid-cols-3 lg:grid-cols-6 justify-center
            mobile:gap-y-5 xs:gap-y-12 sm:gap-12 mb-28">
      {HeadphoneGallary}
    </div>
  )
}

export default CategoryGallary