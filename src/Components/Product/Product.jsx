import React from 'react'
import Laptop from '../../images/laptop.jpg'
import DeleteIcon from '@mui/icons-material/Delete';

function Product() {
  return (
    <div className='p-3'>
      <div className='p-3 w-64 md:w-72 '>
          <div className='rounded-md bg-white'>
            <div className='flex justify-end px-3 pt-3 text-gray-300'><DeleteIcon/></div>
            <img src={Laptop}/>
          </div>
          <div className='text-[#353A8F] font-medium my-3 p-3 rounded bg-white'>
            <h1 className='text-base uppercase font-medium'>WINGS Nuvobook V1</h1>
            <p className='text-base  font-medium'>Aluminium Alloy Metal Body Intel Intel Core i5 11th Gen 1155G7 (8 GB/512 GB SSD/ Windows 11 Home) WL-Nuvobook V1-RED Thin and Light Laptop (15.6 Inch, Red, 1.60 Kg)</p>
            <button className='bg-[#211A66] w-full text-white py-1 rounded-md  my-2' >Buy Now</button>
          </div>
      </div>
      <div className=''>
        
      </div>
    </div>
  )
}

export default Product