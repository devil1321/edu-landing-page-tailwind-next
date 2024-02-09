import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='comments-footer flex justify-center items-center'>
      <Image src="/assets/google-store.png" alt="google-store" width={150} height={50} />      
      <Image src="/assets/apple-store.png" alt="google-store" width={140} height={50} />      
    </div>
  )
}

export default Footer
