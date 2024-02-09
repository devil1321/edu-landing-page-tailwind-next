import React from 'react'
import Image from 'next/image';

interface IconProps{
  img:string;
  isLeft:boolean;
  top:string;
}

const Icon:React.FC<IconProps> = ({img,isLeft,top}) => {
  return (
    <div className={`learners-icon absolute ${isLeft ? "left-0" : 'right-0'} ${top}`}>
      <Image src={img} alt='learners-icon' width={100} height={100}/>
    </div>
  )
}

export default Icon
