import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
const App = () => {
  return (
    <>
    <Header/>
      <main>
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