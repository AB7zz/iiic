import React from 'react'
import { Link } from 'react-router-dom'

const ProjectButtons = () => {
  return(   
    <div className='flex flex-col mt-36'>
        <Link to='/dashboard/project/upload' className='bg-[#16255D] text-white px-16 py-3 mb-5 rounded-[12px] shadow-xl text-center'>Post New Project</Link>
        <Link to='/dashboard/project/checkStatus' className='bg-[#16255D] text-white px-16 py-3 mb-5 rounded-[12px] shadow-xl text-center'>Check status of Posts</Link>
        {/* <Link to='/dashboard/project/report' className='bg-[#16255D] text-white px-16 py-3 mb-5 rounded-[12px] shadow-xl text-center'>Application Reports</Link> */}
    </div>
)
}

export default ProjectButtons