import React from 'react'
// import { LiaGreaterThanSolid } from 'react-icons/li';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Path = () => {
  return (
    <div>
        <ul className='flex flex-row pt-2 px-10 items-center'>
            <li className='ml-2'>Home</li><span className='ml-2'><FaGreaterThan size={10}/></span>
            <li className='ml-2'>Products</li><span className='ml-2'><FaGreaterThan size={10}/></span>
            <li className='ml-2'>Chicken</li><span className='ml-2'><FaGreaterThan size={10}/></span>
            <li className='ml-2'>Broiler Chicken Drumsticks (±50gm) 1kg</li>
        </ul>
        
    </div>
  )
}

export default Path