import React, { MutableRefObject } from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface ItemProps{
  innerRef:MutableRefObject<HTMLDivElement>
  img:string;
  heading:string;
  tags:string[];
  link:string;
}

const Item:React.FC<ItemProps> = ({innerRef,img,heading,tags,link}) => {
  return (
    <div className='carousel-item min-w-[400px] mx-1' ref={innerRef}>
      <div className="carousel-item-img-wrapper max-h-[300px] rounded-t-lg overflow-hidden pointer-events-none select-none">
        <Image className="pointer-events-none select-none" src={img} alt="carousel-img" width={400} height={400} />
      </div>
      <h4 className="my-2 text-h5 pointer-events-none select-none">{heading}</h4>
      <div className="carousel-item-tags flex justify-start items-center flex-wrap">
        {tags.map((t:string)=><div key={t} className="carousel-item-tag pointer-events-none select-none mx-1 my-1 bg-sky-figma text-white font-bold min-w-fit p-1 rounded-md">#{t}</div>)}
      </div>
      <Link href="" className='carousel-item-link select-none text-purple-figma underline my-5'>{link}</Link>
    </div>
  )
}

export default Item
