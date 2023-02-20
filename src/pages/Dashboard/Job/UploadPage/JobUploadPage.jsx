import React from 'react'

const JobUploadPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>JobUploadPage</div>
  )
}

export default JobUploadPage