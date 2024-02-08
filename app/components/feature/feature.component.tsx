import React from 'react'
import Details from './details.component'
import Image from './image.component'
const Feature = () => {
  return (
    <div className='feature bg-[url("/assets/feature-bg.png")] md:flex md:justify-between md:items-center'>
      <Details />
      <Image img="/assets/feature.png" />
    </div>
  )
}

export default Feature
