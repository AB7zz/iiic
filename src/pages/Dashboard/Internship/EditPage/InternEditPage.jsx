import React from 'react'
import Edit from '../../../../components/Dashboard/Edit/Internship/Edit'
import Navbar from '../../../../components/Dashboard/Upload/Navbar/Navbar'

const InternEditPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
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