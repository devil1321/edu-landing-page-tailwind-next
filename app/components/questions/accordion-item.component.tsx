'use client'
import React, { useState } from 'react'

interface AccordionItemProps{
  heading:string;
  text:string;
}

const AccordionItem:React.FC<AccordionItemProps> = ({heading,text}) => {

  const [isOpen,setIsOpen] = useState<boolean>(false)
  
  return (
    <div className='questions-accordion-item py-2 my-10 border-b-[1px] border-gray-300 '>
      <div className="questions-accordion-item-heading font-bold flex justify-between items-center cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
        <h3 className="h5">{heading}</h3>
        {!isOpen
          ? <div className='font-bold text-white rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-r from-sky-figma to-purple-figma'> +</div>
          : <div className='font-bold text-white rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-r from-sky-figma to-purple-figma'>-</div>
        }
      </div>
      {isOpen && <div className="pl-10 my-5 animate-fade-in questions-accordion-item-text">{text}</div>}
    </div>
  )
}

export default AccordionItem
