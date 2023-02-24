import React from 'react'
import { CompanyContext } from '../Context/CompanyContextProvider'

const Analytics = () => {
  const {totalPosts, totalVerified} = React.useContext(CompanyContext)
  return (
    <div className='grid grid-cols-2 md:flex md:flex-col mt-20 ml-16 md:mt-36 md:ml-36'>
        <div>
          <p className='text-3xl md:text-4xl'>Total Posts</p>
          <p className='text-6xl md:text-8xl font-semibold text-[#323232]'>{totalPosts || '0'}</p>
        </div>
        <div>
          <p className='text-3xl md:text-4xl'>Approved Posts</p>
          <p className='text-6xl md:text-8xl font-semibold text-[#31AD1D]'>{totalVerified || '0'}</p>
        </div>
    </div>
  )
}

export default Analytics