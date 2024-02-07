import React from 'react'
import Details from './details.component'
import Image from './image.component'

const Hero = () => {
  return (
    <div className=' sm:block lg:flex lg:justify-between lg:items-center'>
      <Details />
      <Image />
    </div>
  )
}

export default Hero
