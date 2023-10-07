import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenuAlt2 } from 'react-icons/hi';
import { RiCloseFill, RiArrowDropDownLine } from 'react-icons/ri';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { useState } from 'react';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';
const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [totalItems, setTotalItems] = useState(0);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 px-10 bg-white mx-auto sticky'>
        <div className='flex items-center'>
            <div onClick={handleNav} className='block mr-5 cursor-pointer'>
                {nav ? <RiCloseFill size={30}/> : <HiMenuAlt2 size={30} />}
            </div>
            <img src={Logo} alt='logo' className='w-10 h-10 mr-10 cursor-pointer'/>
            <ul className='hidden lg:flex'>
                <li className='p-4 cursor-pointer flex justify-center items-center'>Home</li>
                <li className='p-4 cursor-pointer flex justify-center items-center'>Offers <RiArrowDropDownLine size={20}/></li>
                <li className='p-4 cursor-pointer flex justify-center items-center'>BOGO <RiArrowDropDownLine size={20}/></li>
                <li className='p-4 cursor-pointer flex justify-center items-center'>Plastic free <RiArrowDropDownLine size={20}/></li>
            </ul>
        </div>
        <div className='flex items-center'>
            <div className='rounded-lg flex items-center border border-gray-300
                px-2 w-[150px] sm:w-[300px] lg:w-[400px] mr-7'>
                <AiOutlineSearch size={25}/>
                <input className='bg-transparent p-2 w-full' 
                type='text' placeholder='I am searching for...' />
            </div>
            <div className='flex items-center'>
                <MdOutlineFavoriteBorder size={40} className='cursor-pointer' />
                <div className='bg-[#0db04b] text-white rounded-full w-6 h-6
                ml-[-17px] mt-[-20px] text-center flex justify-center mr-5 md:mr-0'>
                    <span className=''>
                        {totalItems}
                    </span>
                </div>
                <p className='text-xl text-gray-400 mx-7 hidden md:flex'>|</p>
                <div >
                    <img src={Profile} alt="profile photo" className='w-12 h-12 cursor-pointer' />
                </div>
            </div>
            
        </div>
        
        
        
        <ul className={nav ? 'fixed left-0 top-0 w-[50%] md:w-[25%]  h-full border-r bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <div className='flex justify-end'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <div onClick={handleNav} className='m-3 cursor-pointer'><RiCloseFill size={30}/></div>
            </div>
            
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
