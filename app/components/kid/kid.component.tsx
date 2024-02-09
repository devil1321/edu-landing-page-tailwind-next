import React from 'react'
import Image from './image.component'
import Details from './details.component'

const Kid = () => {
  return (
    <div className='kid md:flex md:justify-between md:items-center'>
      <Image img="/assets/kid-card.png" />
      <Details />
    </div>
  )
}

export default Kid
