import React from 'react'
import Img from '../assets/Images/person 2.png'

const MustHave: React.FC = () => {
  return (
    <div className='contain flex gap-5 mobile:flex-col-reverse md3:flex-row items-center justify-between mb-28'>
      <div>
        <div className='mb-14'>
          <h1 className='text-[44px] leading-[50px] font-semibold mb-10'>Get your next must-have <br className='mobile:hidden' /> Gadget</h1>
          <p className='text-[17px] font-medium'>
            Collect the innovation you love. <br />
            Explore our curated selection of high-tech wonders, <br className='mobile:hidden sm:block md3:hidden' />
            designed to elevate your daily life and inspire your passions.</p>
        </div>
        <button className='text-[15px] bg-[#333333] hover:bg-[#141414] transition text-white py-2.5 px-9 rounded-[4px]'>SEE MORE</button>
      </div>

      <img src={Img} className='mobile:h-[300px] md:h-[330px] md2:h-[370px] md3:h-[330px]  lg:h-[370px] xl:h-[400px] 2xl:h-[500px] mobile:mb-14 md2:mb-0' />
    </div>
  )
}

export default MustHave