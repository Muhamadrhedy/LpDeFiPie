import React from 'react'

export default function Footer() {
  return (
     <section>
        <footer className='bg-primary-500 rounded-tl-[30px] md:rounded-tl-[100px]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 p-2 md:p-5 py-8 md:pt-[3%] relative'>
                <div className='md:w-[55%] flex-wrap md:justify-start'>
                  <div className='py-8'>
                    <h2 className='text-3xl w-full text-center font-bold text-white md:text-start md:text-5xl '><span className='text-primary-300'>Join</span> Vision Capital and get funded</h2>
                    <h4 className='text-xs mt-2 text-center md:text-start lg:text-sm xl:text-lg text-white'>we'll get back to you within 24 hours</h4>
                  </div> 
                  <div> 
                    <form action="#">
                      <div className='grid grid-cols-1 md:grid-cols-2 md:place-items-start gap-1 gap-x-5 md:gap-x-4 '>
                        <div className='grid grid-cols-1 gap-2 w-full'>
                          <div className='grid grid-cols-1 gap-2'>
                            <label htmlFor="#" className='text-white font-thin text-bayi'>How is your project called?</label>
                            <input type="text" className='rounded-lg p-3 w-full' />
                          </div>
                          <div className='grid grid-cols-1 gap-2'>
                            <label htmlFor="#" className='text-white font-thin text-bayi'>Please tell us about the project</label>
                            <input type="text" className='rounded-lg p-3 w-full' />
                          </div>
                        </div>
                        <div className='grid grid-cols-1 gap-2 w-full'>
                          <div className='grid grid-cols-1 gap-2'>
                            <label htmlFor="#" className='text-white font-thin text-bayi'>Your Email</label>
                            <input type="text" className='rounded-lg p-3 w-full' />
                          </div>
                          <div className='grid grid-cols-1 gap-2'>
                            <label htmlFor="#" className='text-white font-thin text-bayi'>Telegram name</label>
                            <input type="text" className='rounded-lg p-3 w-full' />
                          </div>
                        </div>
                        <div className='w-full'>
                          <input className='bg-primary-300 rounded-lg p-3 text-white text-xs hover:opacity-80 w-[100%] mt-5' type="submit" name="Send" id="Send" placeholder='Send'/>
                        </div>
                        <div className='md:w-[50%] grid grid-cols-1 justify-center  md:place-items-end md:absolute md:bottom-0 md:right-0 mb-5 px-4 sm:px-6 md:px-8'>
                          <div className='flex p-3 justify-center items-center gap-5'>
                            <img src="img/socials/fb.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                            <img src="img/socials/twit.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                            <img src="img/socials/tele.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                            <img src="img/socials/github.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                          </div>
                          <div className='flex justify-center gap-3 items-center '>
                            <p className='text-white text-bayi underline hover:opacity-80 cursor-pointer'>hello@visioncapital.com</p>
                            <p className='text-white text-bayi underline hover:opacity-80 cursor-pointer'>Join us on Telegram</p>
                          </div>
                      </div>
                      </div>
                    </form>
                  </div>
                </div>
                
            </div>
        </footer>
     </section>
  )
};