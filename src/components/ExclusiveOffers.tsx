import React from 'react'
import Img from '../assets/Images/people.png'

const ExclusiveOffers: React.FC = () => {
  return (
    <div className='contain flex items-center justify-between gap-5'>
      <img src={Img} className='h-[300px]' />
      <div>
        <div className='mb-16'>
          <h1 className='text-3xl font-semibold mb-4'>Discover exclusive offer in <br /> your budget</h1>
          <p className='text-[13px] font-medium'>
            Collect the innovation you love. <br />
            Explore our curated selection of high-tech wonders, designed to <br />
            elevate your daily life and inspire your passions
            passions.</p>
        </div>
        <button className='text-[13px] bg-[#333333] text-white py-2.5 px-9 rounded-[4px]'>SEE MORE</button>
      </div>
    </div>
  )
}

export default ExclusiveOffers