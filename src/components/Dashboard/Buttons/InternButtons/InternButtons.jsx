import React from 'react'
import { Link } from 'react-router-dom'

const InternButtons = () => {
    return(   
        <div className='flex flex-col mt-20 md:mt-36'>
            <Link to='/dashboard/internship/upload' className='bg-[#16255D] md:w-[100%] m-auto text-white px-16 py-3 mb-4 md:m-4 rounded-[12px] shadow-xl text-center'>Post New Internship</Link>
            <Link to='/dashboard/internship/checkStatus' className='bg-[#16255D] md:w-[100%] m-auto text-white px-16 py-3 mb-4 md:m-4 rounded-[12px] shadow-xl text-center'>Check status of Posts</Link>
            {/* <Link to='/dashboard/internship/report' className='bg-[#16255D] text-white px-16 py-3 mb-5 rounded-[12px] shadow-xl text-center'>Application Reports</Link> */}
        </div>
    )
}

export default InternButtons