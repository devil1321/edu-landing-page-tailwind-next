import React from 'react'
import Link from 'next/link'
const Foot = () => {
  return (
    <div className='footer-foot md:flex md:justify-between md:items-center'>
      <div className="footer-foot-links text-center md:text-left my-2 md:my-0">
        <Link href="#" className='mx-2'>Privacy Policy</Link>
        <Link href="#" className='mx-2'>Terms & Conditions</Link>
        <Link href="#" className='mx-2'>Support</Link>
      </div>
      <p className='text-center md:text-left'>&copy; Copyright 2024, All Rights Reserved</p>
    </div>
  )
}

export default Foot
