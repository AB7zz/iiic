import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReportPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <div>ReportPage</div>
  )
}

export default ReportPage