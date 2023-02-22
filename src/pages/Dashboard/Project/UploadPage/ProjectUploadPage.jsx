import React from 'react'

const ProjectUploadPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>ProjectUploadPage</div>
  )
}

export default ProjectUploadPage