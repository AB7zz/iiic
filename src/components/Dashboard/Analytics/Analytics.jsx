import React from 'react'
import { CompanyContext } from '../Context/CompanyContextProvider'

const Analytics = () => {
  const {totalPosts, totalVerified} = React.useContext(CompanyContext)
  return (
    <div className='flex flex-col mt-36 ml-36'>
        <p className='text-4xl'>Total Posts</p>
        <p className='text-8xl font-semibold text-[#323232]'>{totalPosts}</p>
        <p className='text-4xl'>Approved Posts</p>
        <p className='text-8xl font-semibold text-[#31AD1D]'>{totalVerified}</p>
    </div>
  )
}

export default Analytics