import React from 'react'
import { GlobalComponents } from '../global'

const Details = () => {
  return (
    <div className='kid-details p-2 md:p-0 md:w-1/2'>
      <GlobalComponents.Title size='h5' position='text-left my-5' text='Try EduPlay for free' />
      <p className="text-heading md:w-3/4">Unlock knowledge through play. Dive into EduPlay`s world of fun and discovery. Ready for endless smiles and learning adventures? </p>
      <button className="my-10 p-2 rounded-lg bg-purple-figma text-white font-bold">Get started for free</button>
    </div>
  )
}

export default Details
