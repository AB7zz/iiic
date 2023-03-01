import React from 'react'
import { useNavigate } from 'react-router-dom'
import Analytics from '../../../../components/Dashboard/Analytics/Analytics'
import ProjectButtons from '../../../../components/Dashboard/Buttons/ProjectButtons/ProjectButtons'
import Company from '../../../../components/Dashboard/Company/Company'
import Navbar2 from '../../../../components/Dashboard/Navbar/Navbar2'
import Options from '../../../../components/Dashboard/Options/Options'

const ProjectDashPage = () => {
  const navigate = useNavigate()
  React.useEffect(() =>{
    if(!sessionStorage.getItem('user')){
      window.location.replace('/iiic/login')
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