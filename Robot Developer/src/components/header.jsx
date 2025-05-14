import React, { useState } from 'react'
const header = () => {
    const [menu, setmenu] = useState(false)
  return (
    <>
        <header className='flex  justify-between items-center py-4 px-4 lg:px-20 '>

            <h1 className='text-3xl md:text-4xl lg:text-5xl font-light m-0' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">3-Robot</h1>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center gap-12 '>
 
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" href='#'>Company</a>
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" href='#'>Fetures</a>
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" href='#'>Resources</a>
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500" href='#'>docs</a>


            </nav>
            <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50 uppercase' data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"> Sign in</button>

            {/* Mobile Menu Button - Visible only on Smaller Screen size. */}

            <button className='md:hidden text-3xl p-2 z-50'>
                {
                    menu ? (<img className='md:hidden lg:hidden bg-white' src="/assets/menuClose.svg" alt='Menu Button' onClick={()=>{setmenu(!menu)}}></img>):
                    <img className='md:hidden lg:hidden bg-white' src="/assets/menu.svg" alt='Menu-Close Button' onClick={()=>{setmenu(!menu)}}></img>
                }
            </button>
            {/* mobile menu- hidden by default */}


{menu && (            <div id='mobileMenu' className='w-screen fixed top-16 bottom-0 right-0 md:hidden z-40 bg-black opacity-70 backdrop-blur-3xl'>
                <nav className='flex flex-col gap-6 items-center py-10 '>
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' href='#'>Company</a>
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' href='#'>Fetures</a>
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' href='#'>Resources</a>
                <a className='text-base tracking-wide transition-colors hover:text-gray-300 z-50 uppercase' href='#'>docs</a>
                </nav>
            </div>
)}
        </header>
    </>
  )
}

export default header