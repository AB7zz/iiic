import React from 'react'
import { useNavigate } from 'react-router-dom'
import Status from '../../../../components/Dashboard/Status/Internship/Status'
import Navbar from '../../../../components/Dashboard/Upload/Navbar/Navbar'


const StatusPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
     window.location.replace('/iiic/login')
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