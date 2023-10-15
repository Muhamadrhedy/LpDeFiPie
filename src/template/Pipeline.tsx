import React from 'react'
import Image from 'next/image';

export default function Pipeline() {
  return (
     <section className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-24 '>
        <div>
            <h4 className='text-xs text-center font-thin md:text-sm lg:text-lg text-primary-500'>In The Pipeline</h4>

            <div className='grid grid-cols-5 my-1 place-items-center'>
                <img src="img/pipeline/harvard.png" className='w-[15rem] h-[auto]' alt="pipeline" />
                <img src="img/pipeline/microsoft.png" className='w-[15rem] h-[auto]' alt="pipeline" />
                <img src="img/pipeline/nasa.png" className='w-[15rem] h-[auto]' alt="pipeline" />
                <img src="img/pipeline/yale.png" className='w-[15rem] h-[auto]' alt="pipeline" />
                <img src="img/pipeline/payone.png" className='w-[15rem] h-[auto]' alt="pipeline" />
            </div>
        </div>
     </section>
  )
};