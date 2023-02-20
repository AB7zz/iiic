import React from 'react'
import Navbar from '../../../../components/Dashboard/Upload/Navbar/Navbar'
import Upload from '../../../../components/Dashboard/Upload/InternUpload/Upload'

const UploadPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>
      <Navbar/>
      <Upload/>
    </div>
  )
}

export default UploadPage