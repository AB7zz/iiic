import React from 'react'

const ProjectReportPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>ProjectReportPage</div>
  )
}

export default ProjectReportPage