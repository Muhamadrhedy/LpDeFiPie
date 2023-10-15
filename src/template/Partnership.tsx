import React from 'react'
import Image from 'next/image';

export default function Partnership() {
  return (
     <section className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 p-2 md:p-5 lg:mb-24'>
        <div className=''>
            <h4 className='text-xs text-center font-thin md:text-sm text-primary-500 lg:text-lg'>Brought to you by DefiPie in partnership with</h4>
            <div className='flex flex-wrap justify-center items-center'>
                <img src="img/partnership/bluberry.png" className='w-[50%] md:w-auto' alt="partnership" />
                <img src="img/partnership/google.png" className='w-[50%] md:w-auto' alt="partnership" />
                <img src="img/partnership/sony.png" className='w-[50%] md:w-auto' alt="partnership" />
                <img src="img/partnership/ikea.png" className='w-[50%] md:w-auto' alt="partnership" />
                <img src="img/partnership/nectar.png" className='w-[50%] md:w-auto' alt="partnership" />
            </div>
        </div>
     </section>
  )
};