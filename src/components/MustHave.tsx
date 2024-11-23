import React from 'react'
import Img from '../assets/Images/person 2.png'

const MustHave: React.FC = () => {
  return (
    <div className='contain flex mobile:flex-col-reverse md2:flex-row items-center justify-between mb-20'>
      <div>
        <div className='mb-14'>
          <h1 className='text-4xl font-semibold mb-4'>Get your next must-have <br /> Gadget</h1>
          <p className='text-[14.5px] font-medium'>
            Collect the innovation you love. <br />
            Explore our curated selection of high-tech wonders, <br />
            designed to elevate your daily life and inspire your
            passions.</p>
        </div>
        <button className='text-[15px] bg-[#333333] text-white py-2.5 px-9 rounded-[4px]'>SEE MORE</button>
      </div>

      <img src={Img} className='mobile:h-[300px] md:h-[330px] lg:h-[370px] xl:h-[400px] mobile:mb-14 md2:mb-0' />
    </div>
  )
}

export default MustHave