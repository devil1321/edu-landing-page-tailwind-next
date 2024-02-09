import React from 'react'

const SubFeature = () => {
  return (
    <div className='learners-sub-feature p-2 md:p-0 md:px-[200px] text-center md:divide-x md:divide-gray-400 md:flex md:justify-center md:items-start'>
      <div className="learners-sub-feature-item mx-5 md:w-1/3 md:px-1">
        <p className='text-f-16 text-gray-600'>Loved by over</p>
        <h3 className="text-h6 font-bold">30 millon learners</h3>
      </div>
      <div className="learners-sub-feature-item mx-5 md:w-1/3 md:px-1">
        <p className='text-f-16 text-gray-600'>Browse over</p>
        <h3 className="text-h6 font-bold">50 million games </h3>
      </div>
      <div className="learners-sub-feature-item mx-5 md:w-1/3 md:px-1">
        <p className='text-f-16 text-gray-600'>80% learners show</p>
        <h3 className="text-h6 font-bold">increased confidence in 2 weeks</h3>
      </div>
    </div>
  )
}

export default SubFeature
