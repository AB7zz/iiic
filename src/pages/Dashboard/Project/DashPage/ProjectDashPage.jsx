import React from 'react'
import Analytics from '../../../../components/Dashboard/Analytics/Analytics'
import ProjectButtons from '../../../../components/Dashboard/Buttons/ProjectButtons/ProjectButtons'
import Company from '../../../../components/Dashboard/Company/Company'
import Navbar from '../../../../components/Dashboard/Navbar/Navbar'
import Options from '../../../../components/Dashboard/Options/Options'

const ProjectDashPage = () => {
  React.useEffect(() =>{
    if(!localStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <>
      <Navbar/>
      <Options/>
      <div className='grid grid-cols-3'>
        <Company/>
        <ProjectButtons/>
        <Analytics/>
      </div>
    </>

  )
}

export default ProjectDashPage