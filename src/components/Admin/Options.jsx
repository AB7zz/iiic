import React from 'react'
import { Link } from 'react-router-dom'

const Options = () => {
  return (
    <div className='w-[100%] md:w-[30%] m-auto'>
        <div className='rounded-[30px] px-10 py-4 align-center flex justify-between shadow-xl'>
            <Link to='/admin/internship' className='options hover:text-blue-500 focus:text-blue-500'>Internship</Link>
            <Link to='/admin/internship' className='options hover:text-blue-500 focus:text-blue-500'>Jobs</Link>
            <Link to='/admin/internship' className='options hover:text-blue-500 focus:text-blue-500'>Projects</Link>
        </div>
    </div>
  )
}

export default Options