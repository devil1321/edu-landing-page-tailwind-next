import React from 'react'
import Image from 'next/image';

interface IconProps{
  img:string;
}

const Icon:React.FC<IconProps> = ({img}) => {
  return (
    <div className={`footer-icon`}>
      <Image src={img} alt='footer-icon' width={100} height={100}/>
    </div>
  )
}

export default Icon
