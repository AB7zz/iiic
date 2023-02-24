import React from 'react'
import Analytics from '../../../../components/Dashboard/Analytics/Analytics'
import InternButtons from '../../../../components/Dashboard/Buttons/InternButtons/InternButtons'
import Company from '../../../../components/Dashboard/Company/Company'
import Navbar from '../../../../components/Dashboard/Navbar/Navbar'
import Options from '../../../../components/Dashboard/Options/Options'
import axios from 'axios'
import Navbar2 from '../../../../components/Dashboard/Navbar/Navbar2'

const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const InternDashPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
    const checkIfAdmin = async() =>{
      const res = await axios.get(`${url}/api/checkAdmin`,{
          headers: {
              Authorization: sessionStorage.getItem('user')
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
      {/* <Navbar/> */}
      <Navbar2/>
      <Options/>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <Company/>
        <InternButtons/>
        <Analytics/>
      </div>
    </>

  )
}

export default InternDashPage