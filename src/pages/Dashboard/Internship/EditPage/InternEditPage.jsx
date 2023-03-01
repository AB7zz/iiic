import React from 'react'
import { useNavigate } from 'react-router-dom'
import Edit from '../../../../components/Dashboard/Edit/Internship/Edit'
import Navbar from '../../../../components/Dashboard/Upload/Navbar/Navbar'

const InternEditPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <>
        <Navbar/>
        <Edit/>
    </>
  )
}

export default InternEditPage