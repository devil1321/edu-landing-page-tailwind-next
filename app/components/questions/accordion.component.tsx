import React from 'react'
import Item from './accordion-item.component'
const Accordion = () => {
  return (
    <div className='questions-accordion p-2 md:p-0 md:px-10 md:w-2/3 md:ml-auto'>
      <Item heading="What is EduPlay, and how does it work?" text="EduPlay is a gamified learning app designed for children. It transforms educational content into engaging games across various subjects. The app adapts to each child's learning style, providing a personalized and interactive learning experience. Children explore lessons through fun games, making the educational journey enjoyable and effective."  />
      <Item heading="Is EduPlay suitable for all age groups?" text="EduPlay is a gamified learning app designed for children. It transforms educational content into engaging games across various subjects. The app adapts to each child's learning style, providing a personalized and interactive learning experience. Children explore lessons through fun games, making the educational journey enjoyable and effective." />
      <Item heading="How does EduPlay ensure my child's safety while using the app?" text="EduPlay is a gamified learning app designed for children. It transforms educational content into engaging games across various subjects. The app adapts to each child's learning style, providing a personalized and interactive learning experience. Children explore lessons through fun games, making the educational journey enjoyable and effective." />
      <Item heading="Can parents track their child's progress on EduPlay?" text="EduPlay is a gamified learning app designed for children. It transforms educational content into engaging games across various subjects. The app adapts to each child's learning style, providing a personalized and interactive learning experience. Children explore lessons through fun games, making the educational journey enjoyable and effective." />
      <Item heading="Are there any costs associated with using EduPlay?" text="EduPlay is a gamified learning app designed for children. It transforms educational content into engaging games across various subjects. The app adapts to each child's learning style, providing a personalized and interactive learning experience. Children explore lessons through fun games, making the educational journey enjoyable and effective." /> 
    </div>
  )
}

export default Accordion
