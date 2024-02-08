import React from 'react'
import Image from 'next/image';

interface PhoneProps{
  img:string;
  shape:string;
}

const Phone:React.FC<PhoneProps> = ({img,shape}) => {
  return (
    <div className='phone relative md:left-0 md:-top-20 md:w-1/2'>
      <Image className='phone-shape absolute right-0 -top-4' src={shape} width={50} height={50} alt='shape'/>
      <Image className='phone relative top-0 -left-10 md:left-0' src={img} height={600} width={600} alt='phone'/>
    </div>
  )
}

export default Phone
