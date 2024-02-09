import React from 'react'
import Icons from './icons'
import Details from './details.component'
import Columns from './columns.component'
import Foot from './foot.component'

const Footer = () => {
  return (
    <div className='footer md:p-10'>
      <Icons />
      <div className="footer-main-content md:flex md:justify-between md:items-center my-10">
        <Details />
        <Columns />
      </div>
      <Foot />
    </div>
  )
}

export default Footer
