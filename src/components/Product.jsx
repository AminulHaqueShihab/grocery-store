import React from 'react'
import Vegetable from '../assets/vegetable.png';
import { useState } from 'react';
const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const [ count, setCount ] = useState(0);
    const addToCount = () => {
        setCount(count + 1);
    };
    const removeFromCount = () => {
        setCount(count - 1);
    };
  return (
    <div className='p-4 m-4 bg-white rounded-md w-[250px] 
     shadow-md hover:scale-105 ease-in-out duration-300'>
        {count < 1 ?
            <button onClick={() => addToCount()} class="w-10 h-10 rounded-full 
                        bg-[#0db04b] hover:bg-[#4abd88] text-white font-bold text-3xl text-center">
                +
            </button> :
            <div class="w-40 h-10 rounded-full flex justify-between items-center
            bg-[#0db04b] text-white font-bold text-3xl">
                
                <button onClick={() => addToCount()} class="w-10 h-10 rounded-full 
                            bg-[#0db04b] hover:bg-[#4abd88] text-white font-bold text-3xl text-center">
                    +
                </button>
                <p className='text-lg text-center '>{count}</p>
                <button onClick={() => removeFromCount()} class="w-10 h-10 rounded-full 
                            bg-[#0db04b] hover:bg-[#4abd88] text-white font-bold text-3xl text-center">
                    -
                </button>
            </div>
        }
        
        
        {/* Mycard No. {props.cardno} */}
        <div className='w-[210px] mt-[-10px]'>
            <img src={productImage} alt={productName} className=' h-auto' />
        </div>
        <div className='items-end'>
            <p className='font-semibold text-[#4abd88]'>In Stock</p>
            <p className='text-lg font-semibold'>{productName}</p>
            <p className='text-sm'>1kg</p>
            <p className='font-bold text-xl'>BDT. {price}</p>
        </div>
        
    </div>
  )
}

export default Product