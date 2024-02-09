import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Columns = () => {
  return (
    <div className='footer-columns flex justify-evenly mt-5 md:mt-0 md:justify-end items-start md:w-2/3'>
      <div className="footer-columns-column md:w-1/4">
        <h4 className="footer-columns-column-heading font-bold mb-5">Quick links</h4>
        <Link className='block my-1' href="#">Home</Link>
        <Link className='block my-1' href="#">Games</Link>
        <Link className='block my-1' href="#">Subject</Link>
        <Link className='block my-1' href="#">About</Link>
      </div>
      <div className="footer-columns-column md:w-1/4">
        <h4 className="footer-columns-column-heading font-bold mb-5">Company</h4>
        <Link className='block my-1' href="#">About</Link>
        <Link className='block my-1' href="#">Features</Link>
        <Link className='block my-1' href="#">Work</Link>
        <Link className='block my-1' href="#">Career</Link>
      </div>
      <div className="footer-columns-column md:w-1/4">
        <h4 className="footer-columns-column-heading font-bold mb-5">Connect with us</h4>
        <Link href="#" className='flex my-1'>
          <Image  src="/assets/facebook.png" alt="facebook" width={30} height={30}/>  
          <span className='ml-2 my-1'>Facebook</span>
        </Link>
        <Link href="#" className='flex my-1'>
          <Image src="/assets/instagram.png" alt="instagram" width={30} height={30}/> 
          <span className='ml-2 my-1'>Instagram</span>
        </Link>
        <Link href="#" className='flex my-1'>
          <Image src="/assets/twitter.png" alt="twitter" width={30} height={30}/> 
          <span className='ml-2 my-1'>Twitter</span>
        </Link>
        <Link href="#" className='flex my-1'>
          <Image src="/assets/tiktok.png" alt="tiktok" width={30} height={30}/> 
          <span className='ml-2 my-1'>TikTok</span>
        </Link> 
      </div>
    </div>
  )
}

export default Columns
