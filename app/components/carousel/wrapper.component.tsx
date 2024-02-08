'use client'
import React ,{ MutableRefObject, useEffect, useRef ,useState} from 'react'
import Carousel from './carousel.component'

const Wrapper = () => {

  const [isLoad,setIsLoad] = useState<boolean>(false)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [width,setWidth] = useState<number>(0)
  const [startPos,setStartPos] = useState<number>(0)

  
  const carouselRef = useRef() as MutableRefObject<HTMLDivElement>
  const itemRef = useRef() as MutableRefObject<HTMLDivElement>
  
  const handleSetCarousel = () =>{
    carouselRef.current.style.scrollBehavior = 'none'
    if(typeof window !== undefined){
      if(window.innerWidth > 768){
        carouselRef.current.scrollLeft += width / 2 - 20
      }else{
        carouselRef.current.scrollLeft = 0
      }
    }
    carouselRef.current.style.scrollBehavior = 'smooth'
  }
 
  const handlePrev = () =>{
    if(isLoad){
      if(window.innerWidth < 768){
        carouselRef.current.scrollLeft -= width + 10
      }else{
        carouselRef.current.scrollLeft -= width + 5
      }
    }
  }
  const handleNext = () =>{
    if(isLoad){
      if(window.innerWidth < 768){
        carouselRef.current.scrollLeft += width + 10
      }else{
        carouselRef.current.scrollLeft += width + 5
      }
    }
  }
  const handleDragStart = (e:any) =>{
    e.stopPropagation()
    if(e.touches[0]){
      setStartPos(e.touches[0].clientX)
    }else{
      setStartPos(e.clientX)
    }
    setIsDragging(true)
  }
  const handleDrag = (e:any) =>{
    e.stopPropagation()
    if(isDragging){
      if(e.touches[0]){
        carouselRef.current.scrollLeft = startPos - e.touches[0].clientX
      }else{
        carouselRef.current.scrollLeft = startPos - e.clientX
      }
    }
  }
  const handleDragEnd = (e:any) =>{
    e.stopPropagation()
    setStartPos(0)
    setIsDragging(false)
  }

  useEffect(()=>{
    setWidth(itemRef.current.clientWidth)
    handleSetCarousel()
    setIsLoad(true)
  },[isLoad])

  return (
    <div className='carousel-wrapper relative top-0 left-0'>
      <Carousel 
        itemRef={itemRef} 
        carouselRef={carouselRef} 
        handleDragStart={handleDragStart} 
        handleDrag={handleDrag} 
        handleDragEnd={handleDragEnd} 
      />
      <div onClick={()=>handlePrev()} className="carousel-wrapper-prev px-6 py-4 bg-slate-400/70 hover:bg-slate-400/90 cursor-pointer rounded-full font-bold text-white absolute z-10 top-1/2 left-0 -translate-y-24">&lt;</div>
      <div onClick={()=>handleNext()} className="carousel-wrapper-Next px-6 py-4 bg-slate-400/70 hover:bg-slate-400/90 cursor-pointer rounded-full font-bold text-white absolute z-10 top-1/2 right-0 -translate-y-24">&gt;</div>
      <button className="block p-2 bg-purple-figma hover:opacity-70 rounded-lg text-white mx-auto mt-12 mb-2">Browse By Library</button>
      <p className='text-center text-f-14'>We keep releasing new games every three weeks</p>
    </div>
  )
}

export default Wrapper
