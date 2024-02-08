'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Nav = () => {

  const handleNav = () =>{
    const nav_menu = document.querySelector('.nav-menu') as HTMLDivElement
    if(!nav_menu.classList.contains('--open')){
      nav_menu.classList.add('--open')
      nav_menu.classList.remove('max-h-[0px]')
      nav_menu.classList.add('max-h-[400px]')
    }else{
      nav_menu.classList.remove('max-h-[400px]')
      nav_menu.classList.remove('--open')
      nav_menu.classList.add('max-h-[0px]')
    }
  }

  return (
    <div className="nav p-5 flex justify-between items-center flex-wrap">
        <div className='nav-hamburger md:w-3/4' onClick={()=>handleNav()}>
          <span className='block w-8 h-0.5 bg-black my-1'></span>
          <span className='block w-8 h-0.5 bg-black my-1'></span>
          <span className='block w-8 h-0.5 bg-black my-1'></span>
        </div>
        <Image className='w-1/4 md:w-1/12' src="/assets/logo-main.png" alt="logo" width={100} height={100} />
        <div className="nav-menu transition-all max-h-[0px] md:max-h-[30px] overflow-hidden md:overflow-visible ml-auto md:w-3/12 text-center mx:text-left md:flex md:justify-between">
          <Link className='nav-menu-item mr-4 md:mr-0 my-5 min-w-[300px] md:min-w-fit hover:bg-none hover:bg-sky-300 md:my-0 block mg:inline-block hover:opacity-50 hover:underline' href="#">Home</Link>
          <Link className='nav-menu-item mr-4 md:mr-0 my-5 min-w-[300px] md:min-w-fit hover:bg-none hover:bg-sky-300 md:my-0 block mg:inline-block hover:opacity-50 hover:underline' href="#">Games</Link>
          <Link className='nav-menu-item mr-4 md:mr-0 my-5 min-w-[300px] md:min-w-fit hover:bg-none   hover:bg-sky-300 md:my-0 block mg:inline-block hover:opacity-50 hover:underline' href="#">Subjects</Link>
          <Link className='nav-menu-item mr-4 md:mr-0 my-5 min-w-[300px] md:min-w-fit hover:bg-none hover:bg-sky-300 md:my-0 block mg:inline-block hover:opacity-50 hover:underline' href="#">About</Link>
        </div>
        <div className="nav-buttons w-2/2 md:1/5 flex mx-5">
          <Image className='cursor-pointer hover:opacity-70 mx-1' src="/assets/google-store.png" alt="store-logo" width={100} height={30} />
          <Image className='cursor-pointer hover:opacity-70 mx-1' src="/assets/apple-store.png" alt="store-logo" width={100} height={30} />
        </div>
    </div>
  )
}

export default Nav
