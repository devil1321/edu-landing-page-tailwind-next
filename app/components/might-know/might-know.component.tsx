import React from 'react'
import Icon from './icon.component'
import { GlobalComponents } from '../global'
const MightKnow = () => {
  return (
    <div className='might-know'>
      <GlobalComponents.Title size='h5' position='text-center md:my-12 my-5' text='You might know us from' />
      <div className="might-know-icons w-1/1 md:w-1/2 md:relative md:left-10 md:top-0 mx-auto flex justify-center items-center flex-wrap">
        <Icon img="/assets/logo-1.png" />
        <Icon img="/assets/logo-2.png" />
        <Icon img="/assets/logo-3.png" />
        <Icon img="/assets/logo-4.png" />
        <Icon img="/assets/logo-5.png" />
        <Icon img="/assets/logo-6.png" />
        <Icon img="/assets/logo-7.png" />
      </div>
    </div>
  )
}

export default MightKnow
