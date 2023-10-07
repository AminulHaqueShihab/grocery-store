import React from 'react'
import { IoAddCircleSharp } from 'react-icons/io5';
import Product from '../assets/strawberry.png';
import Cilantro from '../assets/cilantro.png';
import Potato from '../assets/Potato.png';
import Tomato from '../assets/tomato.png';
import Ads from '../assets/ads.jfif';
import { GrCart } from 'react-icons/gr';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FiShare2 } from 'react-icons/fi';
const ProductDetails = () => {
  return (
    <div className='flex px-20 mt-20 justify-between'>
        <div className='flex mr-30 w-[70%]'>
            <div className='mr-20'>
                <img src={Product} alt="Product"  className='h-auto w-[500px]'/>
            </div>
            <div>
                <h1 className='text-4xl font-semibold mb-4'>Broiler Chicken Drumsticks (±50gm) 1kg</h1>
                <p className='text-sm bg-orange-200 w-[87px] 
                mb-5  text-center rounded items-center'>80G PLASTIC</p>
                <div className='flex items-center mb-5'>
                    <h1 className='font-bold text-4xl mr-3'><span>৳</span>130</h1>
                    <h2 className='font-bold text-2xl text-[#0db04b] line-through'><span>৳</span>150</h2>
                </div>
                <table className='mb-10'>
                    <tr>
                        <td className='font-bold'>Stock</td>
                        <td className='pl-5'>In stock</td>
                    </tr>
                    <tr>
                        <td className='font-bold'>SKU</td>
                        <td className='pl-5'>B42312</td>
                        
                    </tr>
                    <tr>
                        <td className='font-bold'>Categories</td>
                        <td className='text-white flex ml-5 gap-1 
                        flex-wrap text-sm items-center'>
                            <p className='bg-[#4abd88] mr-1 px-[5px] rounded'>CLEANING SUPPLIES</p>
                            <p className='bg-[#4abd88] mr-1 px-[5px] rounded'>FLOOR & GLASS CLEANER</p>
                            <p className='bg-[#4abd88] px-[5px] rounded'>BOGO</p>
                        </td>
                    </tr>
                    
                </table>

                <div>
                    <p className='text-sm'>Achieve a sparkling clean and higenic 
                        toplet with Shakti toilet cleaner</p>
                </div>
                <div className='flex gap-3 mt-5'>
                    <button className='bg-[#0db04b] hover:bg-white hover:text-black font-bold flex py-2 px-20 rounded-md items-center text-white'><span className='mr-2'><GrCart size={20}/></span>Add to Cart</button>
                    <button className='bg-white hover:bg-[#0db04b] p-2 rounded-md' p-2><MdOutlineFavoriteBorder size={30}/></button>
                    <button className='bg-white hover:bg-[#0db04b] p-2 rounded-md'><FiShare2 size={30}/></button>
                </div>
                
            </div>
        </div>
        <div className='w-[20%]'>
            <h1 className='font-bold text-xl mb-5'>Related Items</h1>
            <div>
                <div className='flex'>
                    <img src={Cilantro} alt="" className='w-10 h-10 mr-5' />
                    <div className='mr-10 mb-5'>
                        <h3 className='font-semibold text-sm'>Fresh Cilantro</h3>
                        <p className='text-xs'>200gm</p>
                        <h2 className='font-bold'>BDT. 40</h2>
                    </div>
                    <IoAddCircleSharp size={30} className='hover:scale-105 cursor-pointer'/>
                </div>
                <div className='flex '>
                    <img src={Potato} alt="" className='w-10 h-10 mr-5' />
                    <div className='mr-10 mb-5'>
                        <h3 className='font-semibold text-sm'>Fresh Potato</h3>
                        <p className='text-xs'>1000gm</p>
                        <h2 className='font-bold'>BDT. 80</h2>
                    </div>
                    <IoAddCircleSharp size={30} className='ml-2 hover:scale-105 cursor-pointer'/>
                </div>
                <div className='flex'>
                    <img src={Tomato} alt="" className='w-10 h-10 mr-5' />
                    <div className='mr-10 mb-5'>
                        <h3 className='font-semibold text-sm'>Fresh Tomato</h3>
                        <p className='text-xs'>500gm</p>
                        <h2 className='font-bold'>BDT. 200</h2>
                    </div>
                    <IoAddCircleSharp size={30} className='hover:scale-105 cursor-pointer'/>
                </div>
            </div>
            <div className='w-full '>
                <img src={Ads} alt="" className='rounded-md'/>
            </div>
            
        </div>
    </div>
  )
}

export default ProductDetails