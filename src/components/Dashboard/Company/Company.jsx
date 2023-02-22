import React from 'react'
import companyLogo from '../../../assets/company-logo.png'
import { CompanyContext } from '../Context/CompanyContextProvider'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const Company = () => {
  const {companyDetail} = React.useContext(CompanyContext)
  return (
    <div className='mt-36'>
        <img src={companyLogo} className="w-[250px] m-auto justify-item-center" alt="company logo" />
        {companyDetail && <h2 className='mt-5 text-center text-[#16255D] text-7xl font-bold'>{companyDetail.company}</h2>}
    </div>
  )
}

export default Company