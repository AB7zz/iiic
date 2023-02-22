import React from 'react'

const ReportPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <div>ReportPage</div>
  )
}

export default ReportPage