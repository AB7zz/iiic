import React from 'react'
import Analytics from '../../../../components/Dashboard/Analytics/Analytics'
import InternButtons from '../../../../components/Dashboard/Buttons/InternButtons/InternButtons'
import Company from '../../../../components/Dashboard/Company/Company'
import Navbar from '../../../../components/Dashboard/Navbar/Navbar'
import Options from '../../../../components/Dashboard/Options/Options'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'

const InternDashPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
    const checkIfAdmin = async() =>{
      const res = await axios.get(`${url}/api/checkAdmin`,{
          headers: {
              Authorization: localStorage.getItem('user')
          }
      })
      if(res.data.status == true){
          window.location.replace('/admin')
      }
    }
    checkIfAdmin()
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