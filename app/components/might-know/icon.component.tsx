import React from 'react'
import Image from 'next/image'

const Icon:React.FC<{img:string}> = ({img}) => {
  return (
    <div className='might-know-icon w-1/4'>
      <Image src={img} alt="might-know-icon" width={100} height={100} />
    </div>
  )
}

export default Icon
