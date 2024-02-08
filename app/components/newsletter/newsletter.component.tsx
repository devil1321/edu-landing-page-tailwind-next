import React from 'react'
import Details from './details.component'
import Form from './form.component'
const Newsletter = () => {
  return (
    <div className='newsletter mt-12 p-10 md:flex md:justify-between md:items-center bg-purple-figma'>
      <Details />
      <Form />
    </div>
  )
}

export default Newsletter
