import React from 'react'
import Image from 'next/image'

const KidImage:React.FC<{img:string}> = ({img}) => {
  return (
    <div className='kid-img md:w-1/2'>
      <Image src={img} alt='kid' width={500} height={500} />
    </div>
  )
}

export default KidImage
