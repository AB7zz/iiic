import React from 'react'

const JobStatusPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>JobStatusPage</div>
  )
}

export default JobStatusPage