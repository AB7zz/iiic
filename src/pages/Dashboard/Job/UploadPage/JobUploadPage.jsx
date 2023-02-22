import React from 'react'

const JobUploadPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>JobUploadPage</div>
  )
}

export default JobUploadPage