import React from 'react'

export default function Footer() {
  return (
     <section>
        <footer className='bg-primary-500 rounded-tl-[30px] md:rounded-tl-[100px] lg:rounded-tl-[180px]'>
            <div className='mr-10 ml-10 md:mr-24 md:ml-24 py-8 relative'>
                <div>
                  <div className='p-8'>
                    <h2 className='text-3xl text-center font-bold text-white md:text-start md:text-4xl'><span className='text-primary-300'>Join</span> Vision Capital and get funded</h2>
                    <h4 className='text-xs mt-2 text-center md:text-start md:p-2 lg:text-sm xl:text-lg text-white'>we'll get back to you within 24 hours</h4>
                  </div>
                  <div>
                    <form action="#">
                      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 md:place-items-start gap-1'>
                        <div className='grid grid-cols-1 place-image-center md:place-image-start gap-2'>
                          <label htmlFor="#" className='text-white font-thin text-bayi'>How is your project called?</label>
                          <input type="text" className='rounded-lg p-2' />
                        </div>
                        <div className='grid grid-cols-1 place-image-center md:place-image-start gap-2'>
                          <label htmlFor="#" className='text-white font-thin text-bayi'>Your Email....</label>
                          <input type="text" className='rounded-lg p-2' />
                        </div>
                        <div className='grid grid-cols-1 place-image-center md:place-image-start gap-2'>
                          <label htmlFor="#" className='text-white font-thin text-bayi'>Please tell us a few words about the project</label>
                          <input type="text" className='rounded-lg p-2' />
                        </div>
                        <div className='grid grid-cols-1 place-image-center md:place-image-start gap-2'>
                          <label htmlFor="#" className='text-white font-thin text-bayi'>Telegram name</label>
                          <input type="text" className='rounded-lg p-2' />
                        </div>
                        <input className='bg-primary-300 rounded-lg p-2 text-white text-sm mt-2' type="submit" name="" id="" placeholder='Send'/>
                      </div>
                    </form>
                  </div>
                </div>
                <div className=''>
                  <div className='flex p-3 justify-center items-center gap-5'>
                    <img src="img/socials/fb.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                    <img src="img/socials/twit.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                    <img src="img/socials/tele.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                    <img src="img/socials/github.png" alt="social" className='hover:opacity-80 cursor-pointer' />
                  </div>
                  <div className='flex justify-between itsms-center'>
                    <p className='text-white text-bayi underline hover:opacity-80 cursor-pointer'>hello@visioncapital.com</p>
                    <p className='text-white text-bayi underline hover:opacity-80 cursor-pointer'>Join us on Telegram</p>
                  </div>
                </div>
            </div>
        </footer>
     </section>
  )
};