import React from 'react'

const Pagination = () => {
 return (
   <div className='learners-pagination  md:divide-x md:divide-gray-400 md:mx-auto md:w-1/2 md:my-5 md:flex md:justify-center md:items-center'>
      <div className="learners-pagination-items md:mr-5 md:w-1/2 flex justify-center items-center">
        <div className="learners-pagination-item-wrapper rounded-full p-[2px] mx-1 bg-gradient-to-r from-sky-figma to-purple-figma">
          <div className="learners-pagination-item text-gray-600 rounded-full font-bold bg-white px-3 py-1">1</div>
        </div>
        <div className="learners-pagination-item-wrapper rounded-full p-[2px] mx-1 bg-gradient-to-r from-sky-figma to-purple-figma">
          <div className="learners-pagination-item text-gray-600 rounded-full font-bold bg-white px-3 py-1">2</div>
        </div>
        <div className="learners-pagination-item-wrapper rounded-full p-[2px] mx-1 bg-gradient-to-r from-sky-figma to-purple-figma">
          <div className="learners-pagination-item text-gray-600 rounded-full font-bold bg-white px-3 py-1">3</div>
        </div>
        <div className="learners-pagination-item-wrapper rounded-full p-[2px] mx-1 bg-gradient-to-r from-sky-figma to-purple-figma">
          <div className="learners-pagination-item text-gray-600 rounded-full font-bold bg-white px-3 py-1">4</div>
        </div>
        <div className="learners-pagination-item-wrapper rounded-full p-[2px] mx-1 bg-gradient-to-r from-sky-figma to-purple-figma">
          <div className="learners-pagination-item text-gray-600 rounded-full font-bold bg-white px-3 py-1">5</div>
        </div>
        <div className="learners-pagination-item-wrapper rounded-full p-[2px] mx-1 bg-gradient-to-r from-sky-figma to-purple-figma">
          <div className="learners-pagination-item text-gray-600 rounded-full font-bold bg-white px-3 py-1">6</div>
        </div>
      </div>
      <div className="learners-buttons my-5 md:my-0 px-5 flex md:w-1/2">
        <button className='min-w-100 md:min-w-fit text-white font-bold rounded-l-3xl p-2 pl-10 pr-8 bg-gradient-to-r from-sky-figma to-purple-figma'>Games (3867+)</button>
        <button className='min-w-100  md:min-w-fit text-gray-600 font-bold rounded-r-3xl p-2 border-[1px] border-gray-300'>Practice sheets (3238+)</button>
      </div>
    </div>
  )
}

export default Pagination
