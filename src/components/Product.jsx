import React from 'react'
import Vegetable from '../assets/vegetable.png';
const Product = (props) => {
  return (
    <div className='p-4 m-4 bg-white rounded-md w-[250px] hover:scale-105 ease-in-out duration-300'>
        <button class="w-10 h-10 rounded-full 
                       bg-[#0db04b] hover:bg-[#4abd88] text-white font-bold text-3xl text-center">
            +
        </button>
        
        {/* Mycard No. {props.cardno} */}
        <div className='w-[210px] mt-[-10px]'>
            <img src={Vegetable} alt="" className=' h-auto' />
        </div>
        <p className='font-semibold text-[#4abd88]'>In Stock</p>
        <p className='text-lg font-semibold'>Fresh Vegetable</p>
        <p className='text-sm'>1kg</p>
        <p className='font-bold text-xl'>BDT. 100</p>
    </div>
  )
}

export default Product