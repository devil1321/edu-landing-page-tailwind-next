import React from 'react'
import Image from 'next/image';

interface CommentProps{
  text:string;
  footer:string;
}

const Comment:React.FC<CommentProps> = ({text,footer}) => {
  return (
    <div className='comments-comment p-2 md:p-0 mt-5 mb-10 md:w-1/4 md:mx-2 h-[200px] flex flex-col justify-between items-stretch'>
      <Image className='mr-auto' src="/assets/mark.png" alt="mark" width={40} height={20} />
      <p>{text}</p>
      <div className="comments-comment-footer flex justify-start items-center">
        <p className="text-f-12 font-bold">{footer}</p>
        <div className="comments-comment-stars ml-2 flex">
          <Image className='mx-1' src="/assets/star.png" alt='star' width={10} height={10}/>
          <Image className='mx-1' src="/assets/star.png" alt='star' width={10} height={10}/>
          <Image className='mx-1' src="/assets/star.png" alt='star' width={10} height={10}/>
          <Image className='mx-1' src="/assets/star.png" alt='star' width={10} height={10}/>
          <Image className='mx-1' src="/assets/star.png" alt='star' width={10} height={10}/>
        </div>
      </div>
    </div>
  )
}

export default Comment
