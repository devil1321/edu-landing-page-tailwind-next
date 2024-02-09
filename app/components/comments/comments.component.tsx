import React from 'react'
import Icon from './icon.component'
import Footer from './footer.component'
import Intro from './intro.component'
import Comment from './comment.component'

const Comments = () => {
  return (
    <div className='comments relative top-0 left-0'>
      <Icon img="/assets/planet.png" isLeft={false} top='top-20' />
      <Icon img="/assets/letters.png" isLeft={true} top='top-20' />
      <Intro />
      <div className="comments-group md:flex md:justify-center md:items-start">
        <Comment text="EduPlay has been a game-changer for my 7-year-old! The adaptive games make learning enjoyable, and the personalized practice sheets are a lifesaver. " footer="Emily Halter (AppStore)" />
        <Comment text="The practice sheets help me get better at stuff, and the bedtime stories are super fun. I can even tell my own stories sometimes! EduPlay makes me look forward to learning." footer="Mars Sam (GooglePlay)" />
        <Comment text="Homeschooling three kids can be challenging, but EduPlay has been a game-changer for us. The games cover a range of subjects, making learning diverse and engaging" footer="Lisa Parker (AppStore)" />
      </div>
      <Footer />
    </div>
  )
}

export default Comments
