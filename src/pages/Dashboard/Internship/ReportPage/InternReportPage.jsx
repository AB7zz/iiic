import React from 'react'

const ReportPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>ReportPage</div>
  )
}

export default ReportPage