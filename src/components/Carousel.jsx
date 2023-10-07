import React from 'react'
import Product from './Product'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Carousel = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
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
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
            
        </div>
    )
}

export default Carousel