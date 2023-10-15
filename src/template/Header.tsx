'use client'
import Link from 'next/link';
import Image from 'next/image';
import { BsList, BsX } from "react-icons/bs";
import react, { useState } from 'react';

const styles = { 
   navLinks: 'cursor-pointer border-b  text-primary-500 border-white hover:border-primary-500 hover:opacity-80'
}
export default function Header() {
   const [bukaMenu, setBukaMenu] = useState(false);
   const toggleMenu = () => setBukaMenu(!bukaMenu);
  return (
     <header className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-10 mb-10 bg-white'>
        <nav className='flex justify-between items-center'>
            {/*Menu Desktop*/}
            <div className=''>
               <Link href={"#"} className='flex justify-start items-center'>
                  <Image src='/img/logo/logo.png' alt='Logo' className='cursor-pointer' width={35} height={35} />
                  <h3 className=' text-primary-500 font-bold mx-2'>Vision Capital</h3>
               </Link>
            </div>
            <div className=' hidden sm:flex'>
               <ul className='sm:flex justify-between items-center gap-5'>
                  <li className={styles.navLinks}>
                     <Link href={'#'}>For Project</Link>
                  </li>
                  <li className={styles.navLinks}>
                     <Link href={'#'}>For Investor</Link>
                  </li>
                  <div className='hover:bg-primary-500 py-2 px-2 rounded-md ml-4 cursor-pointer border-2 ease-out duration-300 border-primary-500 hover:text-white '>
                     <h3 className=''>Join Now</h3>
                  </div>
               </ul>
            </div>
            {/* Menu Mobile */}
            <div onClick={toggleMenu}className='sm:hidden cursor-pointer pl-24'>
               <BsList className='w-8 h-8 text-primary-500 hover:opacity-80'></BsList>
            </div>
            <div className={
               bukaMenu
                  ? 'fixed z-50 top-0 left-0 w-[75%] sm:hidden h-screen bg-primary-500 p-10 ease-in-out duration-500'
                  : 'fixed left-[-100%] top-0 p-10 ease-in-out duration-500'}>
               <div className='flex w-full items-center justify-end'>
                  <div onClick={toggleMenu} className='cursor-pointer'>
                     <BsX  className='h-8 w-8 text-white hover:opacity-80'></BsX>
                  </div>
               </div>
               <div className='flex-col py-4'>
                  <ul className='text-white'>
                     <li onClick={ () => setBukaMenu(false) } className='py-4 hover:underline hover:decoration-primary-300'>
                        <Link href='#'>For Project</Link>
                     </li>
                     <li onClick={ () => setBukaMenu(false) } className='py-4 hover:underline hover:decoration-primary-300'>
                        <Link href='#'>For Investor</Link>
                     </li>
                     <li onClick={ () => setBukaMenu(false) } className='flex items-center py-4 '>
                        <p className='text-primary-500 cursor-pointer px-4 py-1 rounded-lg bg-white hover:text-white hover:bg-primary-300 ease-out duration-300'>Join Now</p>
                     </li>
                  </ul>
               </div>
               <div className='bg-white rounded-full flex justify-center items-center mt-10'>
                  <Image src='/img/logo/logo.png' alt='logo' width={50} height={50} className='py-2 px-2'></Image>
                  <Image src='/img/partnership/bluberry.png' alt='logo' width={50} height={50} className='py-2 px-2'></Image>
                  <Image src='/img/partnership/google.png' alt='logo' width={50} height={50} className='py-2 px-2'></Image>
                  <Image src='/img/partnership/ikea.png' alt='logo' width={50} height={50} className='py-2 px-2'></Image>
               </div>
            </div>
        </nav>
     </header>
  )
};