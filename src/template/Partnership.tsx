import React from 'react'
import Image from 'next/image';

export default function Partnership() {
  return (
     <section className='mr-10 ml-10 md:mr-24 md:ml-24 py-8 '>
        <div className='md:mt-20'>
            <h4 className='text-xs text-center font-thin md:text-sm text-primary-500 lg:text-lg'>Brought to you by DefiPie in partnership with</h4>
            <div className='grid grid-cols-5 my-1 place-items-center'>
                <img src="img/partnership/bluberry.png" className='w-[15rem] h-[auto]' alt="partnership" />
                <img src="img/partnership/google.png" className='w-[15rem] h-[auto]' alt="partnership" />
                <img src="img/partnership/sony.png" className='w-[15rem] h-[auto]' alt="partnership" />
                <img src="img/partnership/ikea.png" className='w-[15rem] h-[auto]' alt="partnership" />
                <img src="img/partnership/nectar.png" className='w-[15rem] h-[auto]' alt="partnership" />
            </div>
        </div>
     </section>
  )
};