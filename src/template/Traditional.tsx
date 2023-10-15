import React from 'react'

export default function Traditional() {
  return (
     <section className='mr-10 ml-10 md:mr-24 md:ml-24 py-8 '>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-3xl text-center font-bold text-primary-500 md:text-start md:text-4xl'>Traditional Fundraising <br /><span className='text-primary-300'>Doesn't Work</span> in Defi</h2>
            </div>
            <div className='grid grid-row-5 justify-center place-content-center gap-3 mt-5 md:mt-2'>
                <div className='text-start text-xs text-primary-500 bg-white hover:bg-zinc-50 shadow-lg rounded-lg shadow-gray-200 lg:text-sm xl:text-lg'>
                    <span className='text-primary-300 ml-3'>01</span>
                    <h4 className='px-3 py-2'>Without a big budget, it's hard to approach venture investor</h4>
                </div>
                <div className='text-start text-xs text-primary-500 bg-white hover:bg-zinc-50 shadow-lg rounded-lg shadow-gray-200 lg:text-sm xl:text-lg'>
                    <span className='text-primary-300 ml-3'>02</span>
                    <h4 className='px-3 py-2'>VCs don't care about your Defi idea only their gains</h4>
                </div>
                <div className='text-start text-xs text-primary-500 bg-white hover:bg-zinc-50 shadow-lg rounded-lg shadow-gray-200 lg:text-sm xl:text-lg'>
                    <span className='text-primary-300 ml-3'>03</span>
                    <h4 className='px-3 py-2'>They force you into selling your tokens at a huge discounts</h4>
                </div>
                <div className='text-start text-xs text-primary-500 bg-white hover:bg-zinc-50 shadow-lg rounded-lg shadow-gray-200 lg:text-sm xl:text-lg'>
                    <span className='text-primary-300 ml-3'>04</span>
                    <h4 className='px-3 py-2'>Then dump them at the first opportunity</h4>
                </div>
                <div className='text-start text-xs text-primary-500 bg-white hover:bg-zinc-50 shadow-lg rounded-lg shadow-gray-200 lg:text-sm xl:text-lg'>
                    <span className='text-primary-300 ml-3'>05</span>
                    <h4 className='px-3 py-2'>Result: Your tokens collapse. Everyone goes home </h4>
                </div>
            </div>
        </div>
     </section>
  )
};