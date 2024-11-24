import React from 'react'
import Img from '../assets/Images/people.png'

const ExclusiveOffers: React.FC = () => {
  return (
    <div className='contain flex mobile:flex-col md2:flex-row items-center justify-between gap-5 mb-28'>
      <img src={Img} className='mobile:h-[330px] lg:h-[370px]' />
      <div>
        <div className='mb-16'>
          <h1 className='text-3xl font-semibold mb-4'>Discover exclusive offer in <br /> your budget</h1>
          <p className='text-[14px] font-medium'>
            Collect the innovation you love. <br />
            Explore our curated selection of high-tech wonders, designed to <br />
            elevate your daily life and inspire your passions
            passions.</p>
        </div>
        <button className='text-[15px] bg-[#333333] text-white py-2.5 px-9 rounded-[4px]'>SEE MORE</button>
      </div>
    </div>
  )
}

export default ExclusiveOffers