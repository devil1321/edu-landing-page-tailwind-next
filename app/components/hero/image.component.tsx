import React from 'react'
import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className='w-2/2 lg:1/2'>
      <Image src="/assets/hero.png" alt="hero-image" width={700} height={700} />
    </div>
  )
}

export default HeroImage
