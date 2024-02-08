import React from 'react'

interface TitleProps{
  size:string;
  text:string;
  position:string;
}

const Title:React.FC<TitleProps> = ({size,text,position}) => {
  return (
    <h2 className={`my-10 font-bold text-${size} ${position}`}>
      {text}
    </h2>
  )
}

export default Title
