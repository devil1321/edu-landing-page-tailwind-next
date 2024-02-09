import React from 'react'
import { GlobalComponents } from '../global'

const Intro = () => {
  return (
    <div className='comments-intro'>
      <GlobalComponents.Title size='h5' position='text-center mt-5 mb-2 md:w-1/3 md:mx-auto' text='95% of parents said their children enjoy using EduPlay'/>
      <p className='text-heading text-center text-gray-600 mb-10'>Below are some of the reviews parents left on our App Store and Google Play</p>
    </div>
  )
}

export default Intro
