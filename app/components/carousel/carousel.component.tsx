import React, { MutableRefObject } from 'react'
import Item from './item.component'

interface CarouselProps{
  carouselRef:MutableRefObject<HTMLDivElement>
  itemRef:MutableRefObject<HTMLDivElement>
  handleDragStart:(e:any) => void
  handleDrag:(e:any) => void
  handleDragEnd:(e:any)=>void
}

const Carousel:React.FC<CarouselProps> = ({itemRef,carouselRef,handleDragStart,handleDrag,handleDragEnd}) => {
  return (
    <div 
      onTouchStart={(e)=>handleDragStart(e)}
      onTouchMove={(e)=>handleDrag(e)}
      onTouchEnd={(e)=>handleDragEnd(e)}
      onMouseDown={(e)=>handleDragStart(e)} 
      onMouseMove={(e)=>handleDrag(e)} 
      onMouseUp={(e)=>handleDragEnd(e)}
      className='carousel ml-10 md:ml-0 flex justify-start items-start overflow-scroll' ref={carouselRef}>
      <Item innerRef={itemRef} img="/assets/carousel-1.png" heading='Kindergarten' tags={['Shapes','Addition','Continuing']} link="See all 320 games" />
      <Item innerRef={itemRef} img="/assets/carousel-2.png" heading='Kindergarten' tags={['Addition','Geometry','Number sense']} link="See all 240 games" />
      <Item innerRef={itemRef} img="/assets/carousel-3.png" heading='Grade 1' tags={['Shapes','Addition','Continuing']} link="" />
      <Item innerRef={itemRef} img="/assets/carousel-4.png" heading='Kindergarten' tags={['Addition','Geometry','Number sense']} link="See all 120 games" />
      <Item innerRef={itemRef} img="/assets/carousel-5.png" heading='Kindergarten' tags={['Shapes','Addition','Continuing']} link="See all 310 games" />
    </div>
  )
}

export default Carousel
