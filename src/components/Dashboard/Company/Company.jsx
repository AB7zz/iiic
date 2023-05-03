import React from 'react'
import { CompanyContext } from '../Context/CompanyContextProvider'

//const url = 'http://iiic-backend.herokuapp.com'
const url = 'http://localhost:5000'

const Company = () => {
  const {companyDetail, logo} = React.useContext(CompanyContext)
  return (
    <div className='mt-20 md:mt-36'>
        <img src={logo} className="w-[150px] md:w-[250px] m-auto justify-item-center" alt="company logo" />
        {companyDetail && <h2 className='mt-5 text-center text-[#16255D] text-3xl md:text-7xl font-bold'>{companyDetail.company}</h2>}
    </div>
  )
}

export default Company