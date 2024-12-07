import React from 'react'
import Img from '../assets/Images/people.png'

const ExclusiveOffers: React.FC = () => {
  return (
    <div className='contain flex mobile:flex-col md3:flex-row items-center justify-between gap-10 mb-28'>
      <img src={Img} className='mobile:h-[330px] md2:h-[370px] md3:h-[330px] lg:h-[370px] lg2:h-[380px] xl:h-[400px] 2xl:h-[500px]' />
      <div>
        <div className='mb-16'>
          <h1 className='text-[42px] leading-[48px] font-semibold mb-10'>Discover exclusive offer in <br className='md2:hidden lg:inline-block' /> your budget</h1>
          <p className='text-[17px] font-medium'>
            Collect the innovation you love. <br />
            Explore our curated selection of high-tech wonders, designed to <br className='mobile:hidden sm:block md3:hidden' />
            elevate your daily life and inspire your passions.</p>
        </div>
        <button className='text-[15px] bg-[#333333] hover:bg-[#141414] transition text-white py-2.5 px-9 rounded-[4px]'>SEE MORE</button>
      </div>
    </div>
  )
}

export default ExclusiveOffers