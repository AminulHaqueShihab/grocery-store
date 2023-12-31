import React from 'react'
import { FiHeadphones } from 'react-icons/fi';
import { BiHomeAlt } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import AppStore from '../assets/app store.png';
import GooglePlay from '../assets/play store.png';
const footer = () => {
  return (
    <div className='mt-20 bg-[#ecece8] py-10 px-20'>
        <hr className='mb-5'/>
        <div className='flex justify-between gap-5'>
            <div className='w-[20%]'>
                <p className='text-sm mb-3'>Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s,
                </p>
                <p className='flex items-center gap-2 mb-3'><span><FiHeadphones/></span>Hotline 24/7</p>
                <p className='font-bold text-lg ml-5 mb-3 cursor-pointer'>+8801234567890</p>
                <p className='flex items-center gap-2 mb-3'><span><BiHomeAlt/></span>Random RD, Dhaka, Bangladesh</p>
                <p className='flex items-center gap-2 cursor-pointer' ><span><HiOutlineMail/></span>xyz@gmail.com</p>
            </div>
            <div>
                <p className='font-bold text-lg mb-5'>Useful Links</p>
                <p className='text-sm mb-2 cursor-pointer'>About us</p>
                <p className='text-sm mb-2 cursor-pointer'>Contact</p>
                <p className='text-sm mb-2 cursor-pointer'>FAQ</p>
                <p className='text-sm mb-2 cursor-pointer'>career</p>
                <p className='text-sm mb-2 cursor-pointer'>Policy</p>
                <p className='text-sm mb-2 cursor-pointer'>Offer</p>
            </div>
            <div>
                <p className='font-bold text-lg mb-5'>Policy</p>
                <p className='text-sm mb-2 cursor-pointer'>Terms of Use</p>
                <p className='text-sm mb-2 cursor-pointer'>Privacy Policy</p>
                <p className='text-sm mb-2 cursor-pointer'>Return & Refnd</p>
                <p className='text-[#4abd88] text-sm mb-2 cursor-pointer'>Reward Redemption</p>
            </div>
            <div>
                <p className='font-bold text-lg mb-5'>Account</p>
                <p className='text-sm mb-2 cursor-pointer'>Sign In</p>
                <p className='text-sm mb-2 cursor-pointer'>View Cart</p>
                <p className='text-sm mb-2 cursor-pointer'>My Wishlist</p>
            </div>
            <div>
                <p className='font-bold text-lg mb-10'>Install App</p>
                <p>Download our app from App Store or</p>
                <p>Google play Store</p>
                <div className='flex w-[150px] ml-[-10px] mt-10'>
                    <img src={AppStore} alt="" className='cursor-pointer hover:scale-105 duration-300' />
                    <img src={GooglePlay} alt="" className='cursor-pointer hover:scale-105 duration-300' />
                </div>
            </div>
        </div>
        <hr className='mb-5 mt-5'/>
        <p className='mt-5'>© 2023 All Right Reserved.</p>
    </div>
  )
}

export default footer