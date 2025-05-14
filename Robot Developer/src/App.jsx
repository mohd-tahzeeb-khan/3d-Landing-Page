import React, { useEffect } from 'react'
import Header from './components/header'
import Hero from './components/hero'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1500,
      once:true
    })
  })
  
  return (
    <>
    <Header/>
      <main className='sm:mb-20 md:mb-10'>
      {/* Gradient Image */}
      <img className='absolute top-0 right-0 opacity-60 -z-10 ' src='/assets/gradient.png' alt='Gradient Image'/>


      {/* Blur Effect */}
      <div className='h-0 w-[40rem] absolute top-20 right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>

      <Hero/>
      </main>
    </>
  )
}

export default App