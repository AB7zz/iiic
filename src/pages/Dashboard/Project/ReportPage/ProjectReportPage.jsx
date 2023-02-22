import React from 'react'

const ProjectReportPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>ProjectReportPage</div>
  )
}

export default ProjectReportPage