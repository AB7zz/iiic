import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobUploadPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <div>JobUploadPage</div>
  )
}

export default JobUploadPage