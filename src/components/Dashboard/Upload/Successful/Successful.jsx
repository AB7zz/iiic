import React from 'react'
import Navbar2 from '../../Navbar/Navbar2'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const Successful = () => {
  return (
    <>
        <Navbar2/>
        <div className='flex flex-col mt-24'>
            <CheckCircleIcon style={{color: 'green', fontSize: '200px'}} className='m-auto' />
            <h2 className='text-center text-4xl font-semibold'>Successfully submitted for review! </h2>
            <Link to='/dashboard/internship/checkStatus' className='bg-green-400 text-white font-semibold rounded-[15px] py-3 px-5 m-auto text-center mt-5'>Check Post Status</Link>
        </div>
    </>
  )
}

export default Successful