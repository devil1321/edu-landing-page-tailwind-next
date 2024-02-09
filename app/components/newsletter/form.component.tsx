import React from 'react'

const Form = () => {
  return (
    <div className='newsletter-form md:w-3/4 ml-5'>
      <form action="">
        <div className="newsletter-form-field flex justify-center items-center flex-wrap md:flex-nowrap md:ml-auto md:w-1/2">
          <input type="text" className='mt-2 mr-5 md:mr-0 md:mt-0 w-[350px] md:w-[400px] block mx-auto md:mx-0 rounded-lg bg-gray-300 md:rounded-none md:rounded-l-lg p-2' placeholder='Enter your email'/>
          <button className='mt-2 mr-5 md:mr-0 w-[350px] md:w-100 md:mt-0 min-w-fit p-2 bg-gray-100 block mx-auto md:mx-0 rounded-lg md:rounded-none md:rounded-r-lg'>🚀 Subscribe</button>
        </div>
      </form>
    </div>
  )
}

export default Form
