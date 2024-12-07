import React from 'react'
import { AiOutlineTruck } from 'react-icons/ai'
import { BsHeadset } from 'react-icons/bs'
import { GoShieldCheck } from 'react-icons/go'

const Features: React.FC = () => {
  return (
      <div className='contain grid md3:grid-cols-3 mobile:gap-y-9 md3:gap-2 text-center mb-20'>
        <div>
          <div className='bg-[#eae4db] inline-block p-2 rounded-full'>
            <AiOutlineTruck className='bg-[#000000] text-5xl text-white rounded-full p-2' />
          </div>
          <h3 className='text-lg font-bold'>FREE AND FAST DELIVERY</h3>
          <p className='text-sm font-medium'>Free delivery for all orders over $140</p>
        </div>
        <div>
          <div className='bg-[#eae4db] inline-block p-2 rounded-full'>
            <BsHeadset className='bg-[#000000] text-5xl text-white rounded-full p-2' />
          </div>
          <h3 className='text-lg font-bold'>24/7 CUSTOMER SERVICE</h3>
          <p className='text-sm font-medium'>Friendly 24/7 customer support</p>
        </div>
        <div>
          <div className='bg-[#eae4db] inline-block p-2 rounded-full'>
            <GoShieldCheck className='bg-[#000000] text-5xl text-white rounded-full p-2' />
          </div>
          <h3 className='text-lg font-bold'>MONEY BACK GUARANTEE</h3>
          <p className='text-sm font-medium'>We return money within 30 days</p>
        </div>
      </div>
  )
}

export default Features