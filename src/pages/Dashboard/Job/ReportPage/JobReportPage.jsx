import React from 'react'

const JobReportPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>JobReportPage</div>
  )
}

export default JobReportPage