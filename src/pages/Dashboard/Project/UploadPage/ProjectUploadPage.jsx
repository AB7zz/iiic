import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectUploadPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <div>ProjectUploadPage</div>
  )
}

export default ProjectUploadPage