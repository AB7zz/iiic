import React from 'react'
import cusat from '../../../assets/cusat.png'

const Hero = () => {
  return (
    <div className='z-0 grid grid-cols-3'>
      <div className='col-span-2 pl-32 pt-44'>
        <p className='text-[#2979F2] text-semibold'>IIIC SOE STUDENT - INDUSTRY JOB PORTAL</p>
        <h1 className='text-black font-bold text-7xl'>Top Talents Awaits </h1>
        <h1 className='text-5xl mt-4 font-bold'>Find your dream team here</h1>
        <p className='mt-3 text-[#646464] text-sm'>Portal for Internships, Projects and Assistance</p>
        <button className='mt-12 rounded font-semibold bg-blue-500 pl-4 pr-4 px-3 py-3 text-white'>Discover the Best Minds Here</button>
      </div>
      <div>
        <img src={cusat} alt="cusat" />
      </div>
    </div>
  )
}

export default Hero