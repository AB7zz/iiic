import React from 'react'

const ProjectStatusPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>ProjectStatusPage</div>
  )
}

export default ProjectStatusPage