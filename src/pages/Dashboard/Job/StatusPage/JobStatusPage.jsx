import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobStatusPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
    }
  }, [])
  return (
    <div>JobStatusPage</div>
  )
}

export default JobStatusPage