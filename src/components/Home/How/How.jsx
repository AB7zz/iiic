import React from 'react'
import { Link } from 'react-router-dom'

const How = () => {
  return (
    <div id="how" className='md:py-40 '>
      <h1 className='text-3xl md:text-7xl font-bold text-center'><span className="text-[#323232]">How it </span><span className='text-[#2979F2]'>Works</span></h1>
      <div className='grid grid-cols-1 md:grid-cols-3 pl-16 md:pl-32 py-16 md:py-20'>
        <div>
          <span className='text-[#2979F2] text-7xl font-bold'>1</span>
          <p className='font-semibold text-xl'>Login</p>
          <hr style={{border: '2px solid #0A043C', marginTop: '15px', marginBottom: '20px', width: '20%'}} />
          <p className='text-[#969696]'>Login to the your profile with given credentials and complete it</p>
          <Link to='/login' className='text-[#2979F2]'>Login Profile</Link>
        </div>
        <div>
          <span className='text-[#2979F2] text-7xl font-bold'>2</span>
          <p className='font-semibold text-xl'>Post Openings</p>
          <hr style={{border: '2px solid #0A043C', marginTop: '15px', marginBottom: '20px', width: '20%'}} />
          <p className='text-[#969696]'>Share details of your opportunities for students</p>
          {/* <p className='text-[#2979F2]'>Learn More</p> */}
        </div>
        <div>
          <span className='text-[#2979F2] text-7xl font-bold'>3</span>
          <p className='font-semibold text-xl'>That's All</p>
          <hr style={{border: '2px solid #0A043C', marginTop: '15px', marginBottom: '20px', width: '20%'}} />
          <p className='text-[#969696]'>We will post your details once verified</p>
          {/* <p className='text-[#2979F2]'>Learn More</p> */}
        </div>
      </div>
    </div>
  )
}

export default How