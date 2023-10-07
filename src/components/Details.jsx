import React from 'react'
import { useState } from 'react';
const Details = () => {
    const [details, setDetails] = useState(true)
    const handleDetails = () => {
        setDetails(!details);
    };
  return (
    <div className='mt-20 px-[10%] w-[60%]'>
        {details ? 
        <div>
            <div className='flex mb-2'>
                <h2 onClick={() => handleDetails(!details) } className='font-bold text-2xl mr-5 cursor-pointer'>Details</h2>
                <h2 onClick={() => handleDetails(!details) } className=' text-2xl cursor-pointer'>More Information</h2>
            </div>
            <hr className='mb-5'/>
            <p>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has been the 
                industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to 
                make a type specimen book. It has survived not only five 
                centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
            </p>
        </div>
    : 
    <div>
        <div className='flex mb-2'>
            <h2 onClick={() => handleDetails(!details) } className='text-2xl mr-5 cursor-pointer'>Details</h2>
            <h2 onClick={() => handleDetails(!details) } className='font-bold text-2xl cursor-pointer'>More Information</h2>
        </div>
        <hr className='mb-5'/>
        <p>There are many variations of passages of 
            Lorem Ipsum available, but the majority have 
            suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to 
            be sure there isn't anything embarrassing hidden in the middle 
            of text. All the Lorem Ipsum generators.
        </p>
    </div>
    }
        
        
    </div>
  )
}

export default Details