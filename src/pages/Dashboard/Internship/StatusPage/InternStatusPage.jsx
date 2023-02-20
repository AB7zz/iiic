import React from 'react'
import Status from '../../../../components/Dashboard/Status/Internship/Status'
import Navbar from '../../../../components/Dashboard/Upload/Navbar/Navbar'


const StatusPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <>
      <Navbar/>
      <Status/>
    </>
  )
}

export default StatusPage