import React from 'react'
import PS5 from '../assets/Images/PS5.png'
import speakers from '../assets/Images/speakers.png'
import Group from '../assets/Images/Group.png'
import boombox from '../assets/Images/boombox.png'
import { FaArrowRight } from "react-icons/fa";

const LifeStyle: React.FC = () => {
  return (
    <div>
      <div className='flex items-center gap-5 mb-6'>
        <div className='h-[50px] w-[10px] px-3 rounded-md bg-[#bba689]'></div>
        <h3 className='text-[#bba689] font-semibold text-xl'>Featured</h3>
      </div>

      <h1 className='text-[40px] font-bold mb-8'>Shop by Lifestyle</h1>

      <div className='grid grid-cols-1 gap-10'>
        <div className='grid grid-cols-2 gap-5'>
          <div className='relative bg-[#82beaa] flex justify-center pt-16'>
            <img src={PS5} className='h-[400px]' />

            <div className='absolute grid gap-2 bottom-[6%] left-[5%] text-white'>
              <h2 className='text-lg font-semibold'>PlayStation 5</h2>
              <p className='text-xs'>Black and White version of the PS5 <br /> coming out on sale.</p>
              <div className="flex items-center gap-3">
                <button className="underline underline-offset-[7px]">
                  Shop Now
                </button>
                <FaArrowRight />
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-5'>
            <div className='bg-[#ccd9e5] flex justify-between items-center px-5'>
              <div className='grid gap-1 mt-[70px]'>
                <h2 className='text-lg font-semibold'>For fitness</h2>
                <p className='text-xs'>Featured woman collections that <br /> give you another vibe.</p>
                <div className="flex items-center gap-3">
                  <button className="underline underline-offset-[7px]">
                    Shop Now
                  </button>
                  <FaArrowRight />
                </div>
              </div>
              <img src={Group} className='h-[160px]' />
            </div>

            <div className='grid grid-cols-2 gap-5'>
              <div className='relative bg-[#d1aab3] flex justify-center items-center px-5'>
                <img src={speakers} className='h-[140px]' />
                <div className='absolute bottom-[6%] left-[9%] text-white'>
                  <h2 className='text-lg font-semibold'>For Parties</h2>
                  <p className='text-xs'>wireless speakers</p>
                  <div className="flex items-center gap-3">
                    <button className="underline underline-offset-[7px]">
                      Shop Now
                    </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>

              <div className='relative bg-[#e6d0b2] flex justify-center items-center px-5'>
                <img src={speakers} className='h-[140px]' />
                <div className='absolute bottom-[6%] left-[9%] text-white'>
                  <h2 className='text-lg font-semibold'>For business</h2>
                  <p className='text-xs'>wireless speakers</p>
                  <div className="flex items-center gap-3">
                    <button className="underline underline-offset-[7px]">
                      Shop Now
                    </button>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between bg-[#bcb8d7] px-10 py-12'>
          <div className='flex flex-col items-start gap-7'>
            <h5 className='text-sm font-bold'>Categories</h5>
            <h1 className='text-3xl font-bold text-white'>Enhance Your Music Experience</h1>
            <div className='flex gap-6 text-[#d64f44]'>
              <div className='bg-white flex flex-col rounded-full h-[65px] w-[65px] items-center justify-center'>
                <h4 className='font-bold'>23</h4>
                <p className='text-xs'>Hours</p>
              </div>
              <div className='bg-white flex flex-col rounded-full h-[65px] w-[65px] items-center justify-center'>
                <h4 className='font-bold'>05</h4>
                <p className='text-xs'>Days</p>
              </div>
              <div className='bg-white flex flex-col rounded-full h-[65px] w-[65px] items-center justify-center'>
                <h4 className='font-bold'>59</h4>
                <p className='text-xs'>Minutes</p>
              </div>
              <div className='bg-white flex flex-col rounded-full h-[65px] w-[65px] items-center justify-center'>
                <h4 className='font-bold'>35</h4>
                <p className='text-xs'>Seconds</p>
              </div>
            </div>
            <button className='bg-black text-white text-sm rounded-[4px] px-9 py-2.5'>Buy Now!</button>
          </div>
          <img src={boombox} className='w-[400px] max-h-[230px]' />
        </div>
      </div>
    </div>
  )
}

export default LifeStyle