import React from 'react'
import Image from 'next/image';

export default function Brought() {
  return (
     <section className=' relative flex justify-normal items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:mt-[21rem] lg:mb-[21rem]'>
        <div className=' w-full lg:w-2/4 grid grid-cols-1 place-items-center mb-2 lg:ml-[25rem]'>
            <img src="img/logo/logo.png" alt="" className='w-[20%]'/>
            <h2 className="text-primary-500 font-bold text-3xl md:text-5xl text-center mb-7 ">
            <span className="text-primary-300">Brought to you</span> by DeFiPie
          </h2>
          <p className="text-primary-500 mb-5 text-center lg:text-start text-xs lg:text-sm xl:text-lg">DeFiPie is the first DeFi app to bring together crypto lending, staking, P2P loans, liquidity mining, and trading. We have a strongdevelopment and marketing team and an active, constantly growingcommunity.
          </p>
          <p className="text-primary-500 text-xs text-center lg:text-start lg:text-sm xl:text-lg">
            Project incubation is a natural next step: now that we've done itourselves, we want to help other quality projects to achievesuccess.
          </p>
        </div>
        <img src="img/disp/people.png" alt="people" className="absolute top-25% left-[-20%] hidden lg:block"/>
     </section> 
  )
};