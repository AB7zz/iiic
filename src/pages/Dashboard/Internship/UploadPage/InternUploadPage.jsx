import React from 'react'
import Navbar from '../../../../components/Dashboard/Upload/Navbar/Navbar'
import Upload from '../../../../components/Dashboard/Upload/InternUpload/Upload'
import { useNavigate } from 'react-router-dom'

const UploadPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
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