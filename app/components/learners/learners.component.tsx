import React from 'react'
import { GlobalComponents } from '../global'
import SubFeature from './sub-feature.component'
import Unlocking from './unlocking.component'
import Pagination from './pagination.component'
import Icon from './icon.component'
const Learners = () => {
  return (
    <div className='learners relative top-0 left-0'>
      <Icon img="/assets/world.png" isLeft={true} top="top-20" />
      <Icon img="/assets/book.png" isLeft={false} top="top-20" />
      <GlobalComponents.Title size='h3' position='text-center' text='Join millions of confident learners '/>
      <SubFeature />
      <Unlocking />
      <Pagination />
    </div>
  )
}

export default Learners
