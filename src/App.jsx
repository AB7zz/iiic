import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage/RegisterPage'

import InternDashPage from './pages/Dashboard/Internship/DashPage/InternDashPage.jsx'
import ProjectDashPage from './pages/Dashboard/Project/DashPage/ProjectDashPage.jsx'
import JobDashPage from './pages/Dashboard/Job/DashPage/JobDashPage.jsx'

import InternUploadPage from './pages/Dashboard/Internship/UploadPage/InternUploadPage.jsx'
import ProjectUploadPage from './pages/Dashboard/Project/UploadPage/ProjectUploadPage.jsx'
import JobUploadPage from './pages/Dashboard/Job/UploadPage/JobUploadPage.jsx'

import InternStatusPage from './pages/Dashboard/Internship/StatusPage/InternStatusPage.jsx'
import ProjectStatusPage from './pages/Dashboard/Project/StatusPage/ProjectStatusPage.jsx'
import JobStatusPage from './pages/Dashboard/Job/StatusPage/JobStatusPage.jsx'

import InternReportPage from './pages/Dashboard/Internship/ReportPage/InternReportPage.jsx'
import ProjectReportPage from './pages/Dashboard/Project/ReportPage/ProjectReportPage.jsx'
import JobReportPage from './pages/Dashboard/Job/ReportPage/JobReportPage.jsx'
import Successful from './components/Dashboard/Upload/Successful/Successful'

import AdminPage from './pages/Admin/AdminPage'
import InternEditPage from './pages/Dashboard/Internship/EditPage/InternEditPage'

function App() {
  return (
    <div>
      <BrowserRouter basename='/iiic'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />


          {/* Dashboard  */}
          <Route path='/dashboard/internship' element={<InternDashPage/>} />
          <Route path='/dashboard/job' element={<JobDashPage/>} />
          <Route path='/dashboard/project' element={<ProjectDashPage/>} />
          {/* Dashboard  */}


          {/* Upload  */}
          <Route path='/dashboard/internship/upload' element={<InternUploadPage/>} />
          <Route path='/dashboard/job/upload' element={<JobUploadPage/>} />
          <Route path='/dashboard/project/upload' element={<ProjectUploadPage/>} />
          <Route path='/dashboard/successfulUpload' element={<Successful/>} />
          {/* Upload  */}


          {/* Check Status  */}
          <Route path='/dashboard/internship/checkStatus' element={<InternStatusPage/>} />
          <Route path='/dashboard/job/checkStatus' element={<JobStatusPage/>} />
          <Route path='/dashboard/project/checkStatus' element={<ProjectStatusPage/>} />
          {/* Check Status  */}


          {/* Reports  */}
          <Route path='/dashboard/internship/report' element={<InternReportPage/>} />
          <Route path='/dashboard/job/report' element={<JobReportPage/>} />
          <Route path='/dashboard/project/report' element={<ProjectReportPage/>} />
          {/* Reports  */}


          {/* Edit  */}
          <Route path='/dashboard/internship/edit/:email/:id' element={<InternEditPage/>} />
          {/* Edit  */}

          <Route path='/admin' element={<AdminPage/>} />
          <Route path='/admin/internship' element={<AdminPage/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
