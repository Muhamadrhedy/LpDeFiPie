import React from 'react'
import Image from 'next/image';
import backgroundImage from '../../public/img/background/bg-1.png'

export default function Home() {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
    <div className='pb-24 md:pb-48 lg:pb-64 pt-4 md:pt-16 md:relative bg-zinc-50 to-transparent'>
      <div className='grid grid-cols-1 gap-5 mt-10'>
        <h1 className='z-10 text-4xl font-bold text-primary-500 text-center md:text-5xl lg:text-6xl'>Vision Capital</h1>
        <h3 className='z-10 text-primary-500 text-center text-sm md:text-lg lg:text-xl'>The right way to fund and incubate your Defi startup</h3>
      </div>
      <div className='flex justify-center items-center gap-3 my-5'>
        <div className='z-10 hover:bg-primary-500 hover:text-white bg-primary-300 text-white rounded-lg py-2 px-6 text-xs md:px-11 md:py-4 md:text-lg lg:text-xl'>
          <h3 className=''>I Need Funding</h3>
        </div>
        <div className='z-10 hover:bg-primary-500 hover:text-white bg-primary-white text-primary-500 border border-primary-500 rounded-lg py-2 px-3 text-xs md:px-8 md:py-4 md:text-lg lg:text-xl'>
          <h3 className=''>Became an Investor</h3>
        </div>
      </div>
      <div>
      <div className='hidden md:flex'>
        <img src="img/background/bg-1.png" alt="bg-home" className=" absolute top-0 left-0 t-0 -z-0"/>
        <img src="img/background/bg-2.png" alt="bg-home" className="absolute top-0 right-0 -z-0"/>
      </div>
      </div>
    </div>
    </section>
  )
};