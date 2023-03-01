import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectReportPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <div>ProjectReportPage</div>
  )
}

export default ProjectReportPage