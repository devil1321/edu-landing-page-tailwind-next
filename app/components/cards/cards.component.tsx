import React from 'react'
import Card from './card.component'

const Cards = () => {
  return (
    <div className='cards mt-10 md:flex md:justify-evenly md:items-center'>
      <Card img='/assets/card-1.png' heading='Engaging Games' text='Kids play engaging, interactive games that are geared toward different subjects, making learning fun and efficient'/>
      <Card img='/assets/card-2.png' heading='Practice Sheets' text="Practice sheets are customized based on a child 's learning progress, focusing on specific skills and concepts that may require additional re  inforcement."/>
      <Card img='/assets/card-3.png' heading='Bedtime Stories' text='Children actively participate in the storytelling process, making bedtime an engaging and collaborative experience for both parents and kids.'/>
    </div>
  )
}

export default Cards
