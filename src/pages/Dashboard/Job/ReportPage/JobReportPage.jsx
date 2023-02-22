import React from 'react'

const JobReportPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>JobReportPage</div>
  )
}

export default JobReportPage