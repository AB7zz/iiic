import React from 'react'
import Analytics from '../../../../components/Dashboard/Analytics/Analytics'
import JobButtons from '../../../../components/Dashboard/Buttons/JobButtons/JobButtons'
import Company from '../../../../components/Dashboard/Company/Company'
import Navbar from '../../../../components/Dashboard/Navbar/Navbar'
import Options from '../../../../components/Dashboard/Options/Options'

const JobDashPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <>
      <Navbar/>
      <Options/>
      <div className='grid grid-cols-3'>
        <Company/>
        <JobButtons/>
        <Analytics/>
      </div>
    </>

  )
}

export default JobDashPage