import React from 'react'
import Option from './option.component'
const Details = () => {
  return (
    <div className='downloading-details md:w-1/2'>
      <div className="text-h3 mb-5 font-bold md:w-3/4">How it works: Downloading EduPlay</div>
      <p className="text-headline mb-10">Discover the magic of EduPlay in just a few simple steps! Download the app and unlock a world where learning meets play. All designed to captivate young minds and make education an exciting journey.</p>
      <div className="downloading-details-options">
        <Option number={1} text='Download our app '/>
        <Option number={2} text='Explore and Sign Up'/>
        <Option number={3} text='Customize preferences for a personalized learning'/>
        <Option number={4} text='Dive into Playful Learning'/>
        <Option number={5} text='Track Progress and Celebrate Achievements'/>
        <Option number={6} text='Stay Connected & Enjoy the Benefits of EduPlay'/>
      </div>
    </div>
  )
}

export default Details
