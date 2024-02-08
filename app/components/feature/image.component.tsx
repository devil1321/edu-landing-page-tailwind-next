import React from 'react'
import Image from 'next/image'

const FeatureImage:React.FC<{img:string}> = ({img}) => {
  return (
    <div className='feature-img md:w-1/2'>
      <Image className="mx-auto mt-5 md:ml-auto md:mr-[200px] md:mt-[50px]" src={img} alt="feature-img" width={300} height={300} />
    </div>
  )
}

export default FeatureImage
