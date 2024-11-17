import React from 'react'
import { AiOutlineTruck } from 'react-icons/ai'
import { BsHeadset } from 'react-icons/bs'
import { GoShieldCheck } from 'react-icons/go'

const Footer: React.FC = () => {
  return (
    <div className='text-5xl flex justify-evenly mt-20'>
      <div className='bg-[#eae4db] p-2 rounded-full'>
        <AiOutlineTruck className='bg-[#000000] text-white rounded-full p-2' />
      </div>
      <div className='bg-[#eae4db] p-2 rounded-full'>
        <BsHeadset className='bg-[#000000] text-white rounded-full p-2' />
      </div>
      <div className='bg-[#eae4db] p-2 rounded-full'>
        <GoShieldCheck className='bg-[#000000] text-white rounded-full p-2' />
      </div>
    </div>
  )
}

export default Footer