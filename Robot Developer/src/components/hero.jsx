import React from 'react'
import 'boxicons'
import Spline from '@splinetool/react-spline'
const hero = () => {
  return (
    <>
      <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>

        <div className='left max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0' data-aos="zoom-out-right">
          <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,0.4) rounded-full'>
            <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
               <i class='bx bxs-diamond bx-flashing text-2xl' ></i> <h3  className='uppercase'>Introducting</h3>
            </div>
          </div>


          {/* Main Heading  */}
          <h1 className=' text-3xl sm:text-5xl lg:text-6xl md:text-4xl font-semibold tracking-wide my-8 uppercase'>
            Robot for <br/>
            Developers
          </h1>
          {/* Description */}
          <p className='text-base sm:text-lg tracking-wide text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam rerum, amet architecto a aperiam!
          </p>
          {/* Button */}
          <div className=' flex gap-10'>
            <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full 
                          sm:text-lg text-sm font-semibold tracking-wide transition-all duration-300 
                          hover:bg-[#1a1a1a] uppercase' href='#'><i class='bx bx-link bx-fade-right' ></i> | contact us</a>
                         <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full 
                          sm:text-lg text-sm font-semibold tracking-wide transition-all duration-300 
                          hover:bg-[#a3a3a3] bg-white text-black uppercase' href='#'> Get  Started |<i class='bx bx-link-external bx-fade-right' ></i> </a>
             
          </div>
        </div>

        {/* 3D Model for Landing Page */}
        
          <Spline className='absolute  lg:top-0 top-0 lg:left-[20%] sm:left-[-2%] h-full' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-offset="0" duration="3000" scene="https://prod.spline.design/G9-VEBbHThPTkZ5m/scene.splinecode" />

      </main>
    </>
  )
}

export default hero