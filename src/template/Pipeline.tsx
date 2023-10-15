import React from 'react'
import Image from 'next/image';

export default function Pipeline() {
  return (
     <section className='mr-10 ml-10 md:mr-24 md:ml-24 py-8 '>
        <div>
            <h4 className='text-xs text-center font-thin md:text-sm lg:text-lg'>In The Pipeline</h4>
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