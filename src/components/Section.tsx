import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaFacebook } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'

const Section: React.FC = () => {
  return (
    <div className='contain Sect-style py-20 bg-[#fff9ef] outline outline-[#f3ece2] outline-[3px]'>
      <div className='flex flex-col mobile:items-center lg2:items-start'>
        <h3 className='font-bold text-[20px] mb-4'>Contact Us</h3>
        <div className='flex gap-7 mb-2'>
          <FaMapMarkerAlt className='text-lg' />
          <p className='text-sm font-medium'>Naya Gaun, Pokhara-15, PKR 33700</p>
        </div>
        <div className='flex gap-7 mb-2'>
          <FaPhoneAlt className='text-lg' />
          <p className='text-sm font-medium'>+977 9806771233</p>
        </div>
        <div className='flex gap-7 mb-2'>
          <GrMail className='text-lg' />
          <p className='text-sm font-medium'>bazaratgadget2234@gmail.com</p>
        </div>
      </div>

      <div>
        <h3 className='font-bold text-[20px] mb-4'>Quick Links</h3>
        <div className='flex flex-col gap-2 mobile:items-center lg2:items-start text-sm font-medium'>
          <p className='hov-eff'>Home</p>
          <p className='hov-eff'>About</p>
          <p className='hov-eff'>Product</p>
          <p className='hov-eff'>Contact</p>
        </div>
      </div>

      <div>
        <h3 className='font-bold text-[20px] mb-3.5'>Social Handles</h3>
        <div className='text-2xl flex gap-3 mobile:justify-center lg2:justify-start'>
          <AiFillInstagram className='cursor-pointer' />
          <FaTwitter className='cursor-pointer' />
          <FaFacebook className='cursor-pointer' />
        </div>

        <h3 className='font-bold text-[20px] mt-7 mb-5'>Customer Service</h3>
        <div className='text-sm font-medium mobile:items-center lg2:items-start flex flex-col gap-2'>
          <p className='hov-eff'>Terms of Use</p>
          <p className='hov-eff'>FQA</p>
          <p className='hov-eff'>Report Issue</p>
        </div>
      </div>

      <div className='lg2:row-span-2 xl2:row-span-1'>
        <h3 className='font-bold text-[20px] mb-4'>Subscribe to our News Letter</h3>
        <p className='text-sm font-medium mb-5'>Sign up to be the first to receive latest news about our products.</p>
        <input type="text" className='block mb-5 py-1 px-3 rounded-lg outline-none bg-[#f1ece4]' placeholder='Enter Your Email Adress' />
        <button className='bg-[#252525] hover:bg-[#090909] transition text-white px-4 py-3 rounded-md'>Subscribe {'>'}</button>
      </div>
    </div>
  )
}

export default Section