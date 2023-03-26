import React from 'react'
import Messages from '../../components/Admin/Messages'
import Navbar2 from '../../components/Admin/Navbar2'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'

const AdminMessagesPage = () => {
  return (
    <div className='py-10 px-5'>
        {/* <Navbar2/> */}
        <Link to='/admin' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Admin Panel <HomeIcon/> </Link>
        <Messages/>
    </div>
  )
}

export default AdminMessagesPage