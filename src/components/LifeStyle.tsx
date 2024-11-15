import React from 'react'
import PS5 from '../assets/Images/PS5.png'
import speakers from '../assets/Images/speakers.png'
import Group from '../assets/Images/Group.png'
import boombox from '../assets/Images/boombox.png'

const LifeStyle: React.FC = () => {
  return (
    <div>
      <div className='flex items-center gap-5 mb-6'>
        <div className='h-[50px] w-[10px] px-3 rounded-md bg-[#bba689]'></div>
        <h3 className='text-[#bba689] font-semibold text-xl'>Featured</h3>
      </div>

      <h1 className='text-[40px] font-bold mb-8'>Shop by Lifestyle</h1>

      <div className='grid grid-cols-1 gap-5'>
        <div className='grid grid-cols-2 gap-5'>
          <div className='bg-[#82beaa] flex justify-center pt-16'>
            <img src={PS5} className='h-[400px]' />
          </div>

          <div className='grid grid-cols-1 gap-5'>
            <div className='bg-[#ccd9e5] flex justify-end items-center'>
              <img src={Group} className='h-[160px]' />
            </div>

            <div className='grid grid-cols-2 gap-5'>
              <div className='bg-[#d1aab3] flex justify-center items-center'>
                <img src={speakers} className='h-[140px]' />
              </div>
              <div className='bg-[#e6d0b2] flex justify-center items-center'>
                <img src={speakers} className='h-[140px]' />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#bcb8d7]'>
          <img src={boombox} className='w-[300px]' />
        </div>
      </div>
    </div>
  )
}

export default LifeStyle