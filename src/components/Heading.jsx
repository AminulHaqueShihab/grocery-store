import React from 'react'

export const Heading = () => {
  return (
    <div className="bg-primary text-white flex flex-row justify-between 
    px-4 items-center py-2 text-sm font-semibold">
        <p>Free shipping on orders value more than BDT. 2000</p>
        <p>Return plastics to get reward points</p>
        <p>Get same day delivery</p>
        <p>Free shipping on orders value more than BDT. 2000</p>
        <p>Get same day delivery</p>
        <div className=''>
            <span><button className='m-2'>Find Us</button>    |   </span>
            <span><button className='m-2'>Help</button>    |   </span>
            <span><button className='m-2'> Contact Us</button></span>
        </div>
        
    </div>
  )
}
