import React from 'react'
import Product from './Components/Product/Product'
import Pricing from './Components/Pricing/Pricing'
import Features from './Components/Features/Features'
import RelativeFeatures from './Components/RelativeFeatures/RelativeFeatures'
import Pro from './Components/Pro/Pro'
import { Button, ButtonGroup } from '@mui/material'
import CustomButton from './Components/Button/CustomButton'

function App() {

  return (
    <>
    <div className='w-full flex-wrap'>

      <div className='w-100 md:w-11/12 mx-auto flex flex-col lg:flex-row mt-5'>
        <div className='w-2/12 text-[#181E7F] text-4xl flex flex-col justify-between'>
          <h1 className='italic my-24 '>Compare <br></br><span className='not-italic font-bold'>Products</span></h1>
          <div className='flex-row hidden lg:block mb-20'>
            <button className='text-2xl text-white bg-[#362D86] px-5 mx-1 rounded-md py-1 font-medium'>Full</button>
            <button className='text-2xl text-[#362D86] bg-[#A4BCE0] px-5 mx-1 rounded-md py-1 font-medium'>Difference</button>
          </div>
        </div>
        <div className='w-screen md:w-10/12'>
              <div className='flex flex-col md:flex-row flex-wrap  bg-[#F0F6FE] p-6 rounded-xl'>
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
        </div>
      </div>






      <div className='w-11/12 mx-auto my-1 flex flex-col lg:flex-row'>
        <div className='w-2/12 text-[#181E7F] text-4xl '>
          <h1 className='font-bold'>Prcining</h1>
        </div>
        <div className='w-screen md:w-10/12'>
          <div className='flex flex-col md:flex-row justify-evenly bg-[#F0F6FE] p-6 my-1 rounded-xl'>
              <Pricing />
              <Pricing />
              <Pricing />
              <Pricing />
            </div>
        </div>
      </div>


      <div className='w-11/12 mx-auto my-16 flex flex-col lg:flex-row'>
        <div className='w-2/12 text-[#181E7F] text-4xl '>
          <h1 className='font-bold'>Features</h1>
          <p className='font-normal text-base my-10 text-[#707987]'>Features 1</p>
          <p className='font-normal text-base my-10 text-[#707987]'>Features 1</p>
          <p className='font-normal text-base my-10 text-[#707987]'>Features 1</p>
          <p className='font-normal text-base my-10 text-[#707987]'>Features 1</p>
        </div>
        <div className='w-screen md:w-10/12'>
          <div className='flex-wrap justify-evenly bg-[#F0F6FE] p-6 my-1 rounded-xl'>
              <Features />
              <Features />
              <Features />
              <Features />
          </div>
        </div>
      </div>


      <div className='w-11/12 mx-auto mb-16 flex flex-col lg:flex-row'>
        <div className='w-2/12 text-[#181E7F] text-4xl '>
          <h1 className='font-bold'>Description</h1>
          <p className='font-normal text-base my-10 text-[#707987]'>Relative Feature's</p>
        </div>
        <div className='w-screen md:w-10/12'>
          <div className='justify-evenly flex flex-col md:flex-row bg-[#F0F6FE] p-6 my-1 rounded-xl'>
              <RelativeFeatures />
              <RelativeFeatures />
              <RelativeFeatures />
              <RelativeFeatures />
          </div>
        </div>
      </div>
      

      <div className='w-11/12 mx-auto mb-16 flex -5 bg-[#091ABA] rounded-xl py-2 px-3 text-white'>
          <h1 className='font-medium text-base '>AI Summary</h1>
      </div>
      

      <div className='w-11/12 mx-auto mb-16 flex flex-col lg:flex-row'>
        <div className='w-full lg:w-2/12 text-[#181E7F] text-4xl '>
          <p className='font-normal text-base my-10 text-[#707987]'>Pro's</p>  
        </div>
        <div className='w-screen md:w-10/12'>
          <div className='flex flex-col md:flex-row justify-around bg-[#F0F6FE] p-6 my-1 rounded-xl text-[#707987] '>
            <Pro text="Pro 1"/>
            <Pro text="Pro 1"/>
            <Pro text="Pro 1"/>
            <Pro text="Pro 1"/>
          </div>
        </div>
      </div>

      <div className='w-11/12 mx-auto mb-16 flex flex-col lg:flex-row '>
        <div className='w-full lg:w-2/12 text-[#181E7F] text-4xl '>
          <p className='font-normal text-base my-10 text-[#707987]'>Con's</p>  
        </div>
        <div className='w-10/12'>
          <div className='flex flex-col md:flex-row justify-around bg-[#F0F6FE] p-6 my-1 rounded-xl text-[#707987] '>
            <Pro text = "Con 2" />
            <Pro text = "Con 2" />
            <Pro text = "Con 2" />
            <Pro text = "Con 2" />
          </div>
          <div className='flex flex-col md:flex-row justify-around my-6'>
            <CustomButton />
            <CustomButton />
            <CustomButton />
            <CustomButton />
            
          </div>

        </div>
      </div>
      
      



    </div>
        
    
    </>
  )
}

export default App
