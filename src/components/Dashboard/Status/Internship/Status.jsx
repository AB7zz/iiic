import React from 'react'
import Company from '../../Company/Company'
import './style.css'
import { CompanyContext } from '../../Context/CompanyContextProvider'
import axios from 'axios'


const url = 'https://iiic-backend.herokuapp.com'


const Status = () => {
  const {companyDetail} = React.useContext(CompanyContext)
  const items = [];
  if(companyDetail){
      for(const key in companyDetail.Interns){
        const value = companyDetail.Interns[key]
        items.push(
            <tr key={key}>
                <td>{value.title}</td>
                <td>{value.desc}</td>
                <td>{value.title}</td>
                {value.verified ? <td className='text-green-500 font-semibold'>Verified</td> : <td className='text-red-500 font-semibold'>Not Verified</td>}
                {value.recruited ? <td className='text-green-500 font-semibold'>Recruited</td> : <td className='text-red-500 font-semibold'>Not Recruited</td>}
            </tr>
        )
      }
  }
  return (
    <>
        <div className='grid grid-cols-3 mb-5'>
            <Company className='grid-span-1'/>
            <div className='w-max'>
                <h2 className='text-3xl text-[#16255D] font-semibold mb-3'>Posts Details</h2>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Post Title</th>
                            <th>Post Description</th>
                            <th>Category</th>
                            <th>Verification Status</th>
                            <th>Recruitment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Status