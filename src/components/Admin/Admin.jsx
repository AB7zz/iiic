import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SendIcon from '@mui/icons-material/Send'
import CircularProgress from '@mui/material/CircularProgress';

//const url = 'http://iiic-backend.herokuapp.com'
const url = 'http://localhost:5000'

const Admin = () => {
    const [posts, setPosts] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [note, setNote] = React.useState()
    const [message, setMessage] = React.useState()
    const [verify, setVerify] = React.useState(false)
    const [returned, setReturn] = React.useState(false)
    const [sent, setSent] = React.useState(false)
    React.useEffect(() => {
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
        const fetchPosts = async() => {
            const res = await axios.get(`${url}/api/getPosts/all`,{
                headers:{
                    Authorization: sessionStorage.getItem('user')
                }
            })
            if(res.data.posts){
                setPosts(res.data.posts)
            }
        }
        checkIfAdmin()
        fetchPosts()
    }, [])
    const fetchPosts = async(type) => {
        setLoading(true)
        const res = await axios.get(`${url}/api/getPosts/${type}`,{
            headers:{
                Authorization: sessionStorage.getItem('user')
            }
        })
        if(res.data.posts){
            setPosts(res.data.posts)
            console.log(res.data.posts)
            setLoading(false)
        }
    }
    let sortedPosts
    if(posts){
        sortedPosts = posts.sort(function(a, b) {
            return a.date - b.date;
        });
    }

    
    return (
        <>
            <div className='w-[100%] md:w-[30%] m-auto'>
                <div className='rounded-[30px] px-10 py-4 align-center flex justify-between shadow-xl'>
                    <Link onClick={() =>fetchPosts('all')} className='options hover:text-blue-500 focus:text-blue-500'>All</Link>
                    <Link onClick={() =>fetchPosts('internship')} className='options hover:text-blue-500 focus:text-blue-500'>Internship</Link>
                    <Link onClick={() =>fetchPosts('job')} className='options hover:text-blue-500 focus:text-blue-500'>Jobs</Link>
                    <Link onClick={() =>fetchPosts('project')} className='options hover:text-blue-500 focus:text-blue-500'>Projects</Link>
                </div>
            </div>
            {!loading ? <div className='flex flex-col p-5'>
                {posts && posts.length != 0 ? sortedPosts.map(post => {
                    const handleVerify = async() => {
                        setVerify(true)
                        try {
                            console.log('this is called')
                            const res = await axios.post(`${url}/api/verifyPost`, post, {
                                headers: {
                                    Authorization: sessionStorage.getItem('user')
                                }
                            })
                            if(res.data.success == true){
                                location.reload()
                            }
                        } catch (error) {
                            console.log('Error 9: ', error)
                        }
                    }

                    const handleNote = async() => {
                        if(!note){
                            alert('Write some message')
                            return
                        }
                        setReturn(true)
                        try {
                            const res = await axios.post(`${url}/api/addNote`, {
                                post: post, 
                                note: note
                            }, {
                                headers:{
                                    Authorization: sessionStorage.getItem('user')
                                }
                            })
                            if(res.data.success == true){
                                location.reload()
                            }
                        } catch (error) {
                            console.log('Error 15: ', error)
                        }
                    }
                    const handleMessage = async() => {
                        if(!message){
                            alert('Write some message')
                            return
                        }
                        setSent(true)
                        try{
                            const res = await axios.post(`${url}/api/sendMessage`, {
                                message,
                                email: post.email 
                            }, {
                                headers:{
                                    Authorization: sessionStorage.getItem('user')
                                }
                            })
                            if(res.data.status == true){
                                alert('Message sent successfully')
                                setSent(false)
                            }
                        }catch(error){
                            console.log('Error 21 ', error)
                        }
                    }

                    return(
                    <div className='p-4 rounded-[15px] shadow-xl mb-5'>
                        <h2 className='font-semibold text-2xl'><span className='font-bold'>({post.company})</span> {post.title}</h2>
                        <p className='text-[#404040]'>{post.desc}</p>
                        <p><span className='font-semibold'>Phone:</span> {post.phone || <span className='text-red-500'>No phone no. added</span>}</p>
                        <p><span className='font-semibold'>Location:</span> {post.loc || <span className='text-red-500'>No phone location added</span>}</p>
                        <p><span className='font-semibold'>Duration:</span> {post.duration || <span className='text-red-500'>No phone duration added</span>}</p>
                        <p><span className='font-semibold'>Remote Work Policy:</span> {post.workpolicy || <span className='text-red-500'>No phone work policy added</span>}</p>
                        <p><span className='font-semibold'>Skills:</span> {post.skills || <span className='text-red-500'>No phone skills added</span>}</p>
                        <p><span className='font-semibold'>Stipend:</span> {post.stipend || <span className='text-red-500'>No phone stipend added</span>}</p>
                        {post.cs!=0 && <p><span className='font-semibold'>{post.cs}</span> interns required from CS</p> }
                        {post.it!=0 && <p><span className='font-semibold'>{post.it}</span> interns required from IT</p> }
                        {post.eee!=0 && <p><span className='font-semibold'>{post.eee}</span> interns required from EEE</p> }
                        {post.ec!=0 && <p><span className='font-semibold'>{post.ec}</span> interns required from EC</p> }
                        {post.mec!=0 && <p><span className='font-semibold'>{post.mec}</span> interns required from MEC</p> }
                        {post.sf!=0 && <p><span className='font-semibold'>{post.sf}</span> interns required from SF</p> }
                        {post.ce!=0 && <p><span className='font-semibold'>{post.ce}</span> interns required from CE</p> }
                        {(post.cs == 0 && post.it == 0 && post.eee == 0 && post.ec == 0 && post.mec == 0 && post.sf == 0 && post.ce == 0) && <p className='text-red-500'>No. of interns not added</p>}
                        <div className='flex'>
                            {post.verified ? <button className='rounded-[15px] text-white bg-green-300 px-5 py-2 mt-4 mr-5'>Verified</button> : (verify) ? <button onClick={handleVerify} className='scale-75 rounded-[15px] text-white bg-green-500 px-5 py-2 mt-4 hover:bg-green-300 mr-5'><CircularProgress color="inherit"/></button> : <button onClick={handleVerify} className='rounded-[15px] text-white bg-green-500 px-5 py-2 mt-4 hover:bg-green-300 mr-5'>Mark as verified</button>}
                            {post.recruited ? <button className='rounded-[15px] text-white bg-red-300 px-5 py-2 mt-4 mr-5'>Recruited</button> : <button className='rounded-[15px] text-white bg-red-500 px-5 py-2 mt-4 mr-5'>Not Recruited</button>}
                            <Link to={`/admin/logs/${post.email}/${post.id}`} ><button className='rounded-[15px] text-white bg-[#1c1c1c] px-5 py-2 mt-4 mr-5'>Logs</button></Link>
                        </div>
                        <div className='flex'>
                            {post.edit ? 
                                    <button onClick={handleNote} className='rounded-[15px] text-white bg-blue-300 px-5 py-2 mt-4 mr-5'>Return for correction</button> 
                                : 
                                (returned) ? 
                                <>
                                    <input onChange={e => setNote(e.target.value)} type="text" name="" className='mt-5 border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-5' placeholder='Enter notes...' id="" />
                                    <button onClick={handleNote} className='rounded-[15px] text-white bg-blue-500 px-5 py-2 mt-4 mr-5 hover:bg-blue-300'><CircularProgress color="inherit"/></button>
                                </> 
                                :
                                <>
                                    <input onChange={e => setNote(e.target.value)} type="text" name="" className='mt-5 border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-5' placeholder='Enter notes...' id="" />
                                    <button onClick={handleNote} className='rounded-[15px] text-white bg-blue-500 px-5 py-2 mt-4 mr-5 hover:bg-blue-300'>Return for correction</button>
                                </>
                            }
                        </div>
                        <div className='flex'>
                            <input onChange={e => setMessage(e.target.value)} type="text" name="message" className='mt-5 border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-5' placeholder='Enter your message...' id="" />
                            {sent ? <button onClick={handleMessage} className='rounded-[15px] text-white bg-blue-500 px-5 py-2 mt-4 mr-5 hover:bg-blue-300'><CircularProgress className='scale-75' color="inherit"/> </button> : <button onClick={handleMessage} className='rounded-[15px] text-white bg-blue-500 px-5 py-2 mt-4 mr-5 hover:bg-blue-300'><SendIcon/> </button>}
                        </div>
                    </div>
                )}) : <p className='text-center text-black text-3xl'>No posts available</p>}
            </div> : <p className='text-center text-black text-3xl mt-10'>Loading...</p>}
        </>
    )
}

export default Admin