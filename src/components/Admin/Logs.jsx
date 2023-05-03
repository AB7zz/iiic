import React from 'react'
import Navbar2 from './Navbar2'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import { Link } from 'react-router-dom'

const url = 'http://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const Logs = () => {
    const [postLogs, setPostLogs] = React.useState()
    const [genLogs, setGenLogs] = React.useState()
    const id = useLocation()
    const email = id.pathname.split('/')[3]
    const postId = id.pathname.split('/')[4]
    React.useEffect(() => {
        const getLogs = async() => {
            try{
                const res = await axios.get(`${url}/api/logs`, {
                    params: {
                        email: email, 
                        postId: postId
                    },
                    headers: {
                        Authorization: sessionStorage.getItem('user')
                    }
                })
    
                if(res.data.status == true){
                    setPostLogs(res.data.postLogs[postId])
                    setGenLogs(res.data.generalLogs)
                }else{
                    console.log('error 59')
                }
            }catch(error){
                console.log(error)
            }
        }
        const checkIfAdmin = async() => {
            const res = await axios.get(`${url}/api/checkAdmin`,{
                headers: {
                    Authorization: sessionStorage.getItem('user')
                }
            })
            if(res.data.status == false){
                window.location.replace('/iiic/dashboard')
            }
        }
        checkIfAdmin()
        getLogs()
    }, [])
  return (
    <div className='py-10 px-5'>
        {/* <Navbar2/> */}
        <Link to='/admin' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Admin Panel <HomeIcon/> </Link>
        <div className='p-5 mt-10'>
            <p className='text-2xl font-semibold'>General Logs</p>
            {genLogs && <textarea className='p-5 text-2xl w-[100%] h-screen bg-[#ebebeb]'>{genLogs}</textarea>}
            <p className='text-2xl font-semibold mb-5'>Post Logs</p>
            {postLogs && <textarea className='p-5 text-2xl w-[100%] h-screen bg-[#ebebeb]'>{postLogs}</textarea>}
        </div>
    </div>
  )
}

export default Logs