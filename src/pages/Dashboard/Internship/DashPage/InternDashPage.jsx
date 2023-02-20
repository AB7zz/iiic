import React from 'react'
import Analytics from '../../../../components/Dashboard/Analytics/Analytics'
import InternButtons from '../../../../components/Dashboard/Buttons/InternButtons/InternButtons'
import Company from '../../../../components/Dashboard/Company/Company'
import Navbar from '../../../../components/Dashboard/Navbar/Navbar'
import Options from '../../../../components/Dashboard/Options/Options'

const InternDashPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <>
      <Navbar/>
      <Options/>
      <div className='grid grid-cols-3'>
        <Company/>
        <InternButtons/>
        <Analytics/>
      </div>
    </>

  )
}

export default InternDashPage