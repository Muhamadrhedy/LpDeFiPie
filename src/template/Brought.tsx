import React from 'react'
import Image from 'next/image';

export default function Brought() {
  return (
     <section className='flex justify-normal items-center'>
        <div className='relative pb-36 w-[32rem] h-[auto] lg:w-[40rem] hidden md:flex mb-28 '>
            <img src="img/disp/people.png" alt="people" className='absolute top-0 left-0'/>
        </div>
        <div className='mr-10 ml-10 md:mr-24 md:ml-24 py-8'>
            <div className='grid grid-cols-1 place-items-center gap-4 md:place-items-start'>
                <img src="img/logo/logo.png" alt="logo" className='w-8 text-center md:text-start' />
                <h2 className='text-3xl text-center font-bold text-primary-500 md:text-start md:text-4xl'><span className='text-primary-300'>Brought to you</span> by DeFiPie</h2>
                <p className='text-xs lg:text-sm xl:text-lg md:pr-48'>DeFiPie is the first DeFi app to bring together crypto lending, stacking, P2P loans, liquuidly mining, and trading. We have a strong development and marketing team and an active constanly growing comunity</p>
                <p className='text-xs mt-2 lg:text-sm xl:text-lg md:pr-48'>Project incubation is a natural next step: nowthat we've done it ourself, we want to help other quality projects to achive success</p>
            </div>
        </div>
     </section>
  )
};