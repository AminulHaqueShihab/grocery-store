import React from 'react'
import Product from './Product'
import { PRODUCTS } from '../Products';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Carousel = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 550;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 550;
    };
    
    return (
        <div className="mt-20 px-20">
            <div className='flex gap-2'>
                <h1 className='font-bold text-2xl mr-4'>Related Products</h1>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 bg-white' onClick={slideLeft} size={40} />
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 bg-white' onClick={slideRight} size={40} />

            </div>
            
            <div className='relative flex items-center'>
                <div 
                    id='slider'
                    className='w-full h-full overflow-x-scroll scroll 
                    whitespace-nowrap scroll-smooth scrollbar-hide flex'>
                    {PRODUCTS.map((product) => (

                        <Product data={product} />
                    ))}
                    {/* <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product /> */}
                </div>
            </div>
            
        </div>
    )
}

export default Carousel