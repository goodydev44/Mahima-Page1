import React from 'react'
import img from '../assets/Images/image.png'
import { FaRegHeart, FaRegEye, FaStar } from 'react-icons/fa'

const FlashSales: React.FC = () => {
  const list = [1, 2, 3, 4, 5]

  const rating = list.map(() => {
    return (
      <FaStar className='text-[#ebad3f]' />
    )
  })

  const gallery = list.map(() => {
    return (
      <div className="relative bg-[#ececec] max-w-fit pt-7 pb-2">
        <div className='flex items-start justify-between px-4'>
          <div className='bg-red-500 text-white px-4 py-1 rounded-lg'>-40%</div>
          <div className='grid text-4xl justify-end gap-3'>
            <FaRegHeart className='bg-[#ffffff] p-1.5 rounded-full' />
            <FaRegEye className='bg-[#ffffff] p-1.5 rounded-full' />
          </div>
        </div>
        <div className='text-center -mt-[20px] px-[20%] mb-[70px]'>
          <img src={img} className='h-[160px]' />
        </div>
        <div className='grid gap-1.5 px-3'>
          <h4 className='text-lg font-[500]'>HAVIT HV-G92 Headphone</h4>
          <p className='text-lg text-[#beab90] font-[500]'>$120 <del className='ml-1 text-[#7a7a7a]'>$160</del></p>
          <div className='flex gap-1 text-xl items-center text-[#7a7a7a]'>
            {rating} (88)
          </div>
          <button className='text-lg bg-[#bba689] w-[300px] text-white font-bold p-[10px]'>ADD TO CHART</button>
        </div>
      </div>
    )
  })

  return (
    <div className='mt-28'>
      <div className='flex items-center gap-5 mb-6'>
        <div className='h-[50px] w-[10px] px-3 rounded-md bg-[#bba689]'></div>
        <h3 className='text-[#bba689] font-semibold text-xl'>Today's</h3>
      </div>

      <div className='flex gap-28 mb-6'>
        <h1 className='text-[40px] font-bold'>Flash Sales</h1>
        <div className='flex gap-6 text-[40px] items-end'>
          <div className=''>
            <h3 className='text-base -mb-2'>Days</h3>
            <h1 className='font-bold'>03</h1>
          </div>

          <div className='mb-2 text-[#bba689]'>:</div>

          <div className=''>
            <h3 className='text-base -mb-2'>Hours</h3>
            <h1 className='font-bold'>23</h1>
          </div>

          <div className='mb-2 text-[#bba689]'>:</div>

          <div className=''>
            <h3 className='text-base -mb-2'>Minutes</h3>
            <h1 className='font-bold'>19</h1>
          </div>

          <div className='mb-2 text-[#bba689]'>:</div>

          <div className=''>
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