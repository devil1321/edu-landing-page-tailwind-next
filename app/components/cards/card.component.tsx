import React from 'react'
import Image from 'next/image';

interface CardProps{
  img:string;
  heading:string;
  text:string;
}

const Card:React.FC<CardProps> = ({img,heading,text}) => {
  return (
    <div className='cards-card text-center md:text-left mx-auto md:mx-0 p-5 md:p-0 w-5/6 md:w-1/4'>
      <Image className='cards-card-img md:mr-auto md:mx-0 mx-auto' src={img} alt="card-img" width={70} height={70} />
      <h3 className="cards-card-heading text-h5 my-3">{heading}</h3>      
      <p className='cards-card-text text-f-14'>{text}</p>
    </div>
  )
}

export default Card
