import React from 'react'

const Option:React.FC<{text:string;number:number}> = ({text,number}) => {
  return (
    <div className='my-5 flex justify-start items-center'>
      <div className='text-white font-bold px-3 py-1 rounded-full bg-gradient-to-r from-sky-figma to-purple-figma'>
        {number}
      </div>
      <p className="ml-3">{text}</p>
    </div>
  )
}

export default Option
