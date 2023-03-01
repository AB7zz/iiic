import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobReportPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <div>JobReportPage</div>
  )
}

export default JobReportPage