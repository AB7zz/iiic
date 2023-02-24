import React from 'react'
import Analytics from '../../../../components/Dashboard/Analytics/Analytics'
import ProjectButtons from '../../../../components/Dashboard/Buttons/ProjectButtons/ProjectButtons'
import Company from '../../../../components/Dashboard/Company/Company'
import Navbar2 from '../../../../components/Dashboard/Navbar/Navbar2'
import Options from '../../../../components/Dashboard/Options/Options'

const ProjectDashPage = () => {
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/login')
    }
  }, [])
  return (
    <>
      <Navbar2/>
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