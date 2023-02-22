import React from 'react'

const ProjectStatusPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>ProjectStatusPage</div>
  )
}

export default ProjectStatusPage