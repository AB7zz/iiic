import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectStatusPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <div>ProjectStatusPage</div>
  )
}

export default ProjectStatusPage