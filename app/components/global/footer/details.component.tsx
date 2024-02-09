import React from 'react'
import Image from 'next/image'
const Details = () => {
  return (
    <div className='footer-details p-2 md:p-0 md:w-1/3'>
      <Image src="/assets/logo-main.png" alt="logo" width={70} height={50} />
      <p className='my-5'>Where every game is a lesson, and every lesson is a game. Our app transforms education into playful games, captivating young minds with interactive fun.</p>
      <div className="footer-details-buttons flex">
        <Image className='hover:opacity-70 cursor-pointer' src="/assets/google-store.png" alt="google-store" width={100} height={50}/>
        <Image className='hover:opacity-70 cursor-pointer' src="/assets/apple-store.png" alt="apple-store" width={100} height={50}/>
      </div>
    </div>
  )
}

export default Details
