import React from 'react'
import Img from '../assets/Images/person 2.png'

const MustHave: React.FC = () => {
  return (
    <div className='flex items-center justify-between mb-20'>
      <div>
        <div className='mb-16'>
          <h1 className='text-3xl font-semibold mb-4'>Get your next must-have <br /> Gadget</h1>
          <p className='text-[13px] font-medium'>
            Collect the innovation you love. <br />
            Explore our curated selection of high-tech wonders, <br />
            designed to elevate your daily life and inspire your
            passions.</p>
        </div>
        <button className='text-[13px] bg-[#333333] text-white py-2.5 px-9 rounded-[4px]'>SEE MORE</button>
      </div>

      <img src={Img} className='h-[300px]' />
    </div>
  )
}

export default MustHave