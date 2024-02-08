import React from 'react'
import Details from './details/details.component'
import Phone from './phone.component'

const Downloading = () => {
  return (
    <div className='downloading px-5 my-20 md:flex md:justify-between md:items-start'>
      <Details />
      <Phone img='/assets/phone.png' shape="/assets/shape.png " />
    </div>
  )
}

export default Downloading
