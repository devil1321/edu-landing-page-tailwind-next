import React from 'react'
import { GlobalComponents } from '../global'
import Accordion from './accordion.component'
const Questions = () => {
  return (
    <div className='questions md:flex md:justify-between md:items-start'>
      <GlobalComponents.Title size='h3 md:w-1/3' position='text-left' text='Frequently Asked Questions'/>
      <Accordion />
    </div>
  )
}

export default Questions
