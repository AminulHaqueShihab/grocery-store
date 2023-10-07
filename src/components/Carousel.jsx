import React from 'react'
import Product from './Product'
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
    return (
        <div className="mt-20">
            <h1>Related Products</h1>
            <button className="pre-btn" onClick={btnpressprev}><p>&lt;</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>


            <div className="product-container">
                <Product cardno='1' />
                <Product cardno='2' />
                <Product cardno='3' />
                <Product cardno='4' />
                <Product cardno='5' />
                <Product cardno='6' />
                <Product cardno='7' />
                <Product cardno='8' />
                <Product cardno='9' />
                <Product cardno='10' />
                <Product cardno='11' />
                <Product cardno='12' />
                <Product cardno='13' />
            </div>
        </div>
    )
}

export default Carousel