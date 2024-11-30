import React from 'react'
import img from '../assets/Images/image.png'
import { FaRegHeart, FaRegEye, FaStar } from 'react-icons/fa'
import { nanoid } from 'nanoid'

const FlashSales: React.FC = () => {
  const list = [1, 2, 3, 4, 5]

  const rating = list.map(() => {
    return (
      <FaStar key={nanoid()} className='text-[#ebad3f]' />
    )
  })

  const gallery = list.map(() => {
    return (
      <div key={nanoid()} className="relative bg-[#ececec] max-w-fit pt-7 pb-2">
        <div className='flex items-start justify-between px-4'>
          <div className='bg-red-500 text-white px-4 py-1 rounded-lg text-sm'>-40%</div>
          <div className='grid text-4xl justify-end gap-3'>
            <FaRegHeart className='bg-[#ffffff] p-1.5 rounded-full' />
            <FaRegEye className='bg-[#ffffff] p-1.5 rounded-full' />
          </div>
        </div>
        <div className='text-center -mt-[25px] mx-[20%] mb-[70px]'>
          <img src={img} className='h-[145px]' />
        </div>
        <div className='grid gap-1.5 px-3'>
          <h4 className='text-base font-[500]'>HAVIT HV-G92 Headphone</h4>
          <p className='text-base text-[#beab90] font-[500]'>$120 <del className='ml-1 text-[#7a7a7a]'>$160</del></p>
          <div className='flex gap-1 text-lg items-center text-[#7a7a7a]'>
            {rating} (88)
          </div>
          <button className='text-base bg-[#bba689] w-[260px] text-white font-bold p-[10px]'>ADD TO CHART</button>
        </div>
      </div>
    )
  })

  return (
    <div className='contain mb-[120px]'>
      <div className='flex items-center gap-5 mb-6'>
        <div className='h-[50px] w-[10px] px-3 rounded-md bg-[#bba689]'></div>
        <h3 className='text-[#bba689] font-semibold text-xl'>Today's</h3>
      </div>

      <div className='flex md:items-end mobile:flex-col md:flex-row mb-6 mobile:gap-y-5 md:gap-x-[50px] md2:gap-x-[70px] lg:gap-x-24'>
        <h1 className='text-[40px] font-bold'>Flash Sales</h1>
        <div className='flex gap-6 text-[40px] items-end'>
          <div>
            <h3 className='text-base -mb-2'>Days</h3>
            <h1 className='font-bold'>03</h1>
          </div>

          <div className='mb-2 text-[#bba689]'>:</div>

          <div>
            <h3 className='text-base -mb-2'>Hours</h3>
            <h1 className='font-bold'>23</h1>
          </div>

          <div className='mb-2 text-[#bba689]'>:</div>

          <div>
            <h3 className='text-base -mb-2'>Minutes</h3>
            <h1 className='font-bold'>19</h1>
          </div>

          <div className='mb-2 text-[#bba689]'>:</div>

          <div>
            <h3 className='text-base -mb-2'>Seconds</h3>
            <h1 className='font-bold'>56</h1>
          </div>
        </div>
      </div>
      <div className='flex gap-9 overflow-x-auto'>
        {gallery}
      </div>
    </div>
  )
}

export default FlashSales