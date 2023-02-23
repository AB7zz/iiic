import React from 'react'
import axios from 'axios'
import Options from './Options'

const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const Admin = () => {
    const [posts, setPosts] = React.useState()
    const [note, setNote] = React.useState()
    React.useEffect(() => {
        const checkIfAdmin = async() => {
            const res = await axios.get(`${url}/api/checkAdmin`,{
                headers: {
                    Authorization: sessionStorage.getItem('user')
                }
            })
            if(res.data.status == false){
                window.location.replace('/dashboard/internship')
            }
        }
        const fetchPosts = async() => {
            const res = await axios.get(`${url}/api/getInternshipPosts`,{
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

    
    return (
        <>
            <Options/>
            <div className='flex flex-col p-5'>
                {posts && posts.map(post => {
                    const handleVerify = async() => {
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

                    return(
                    <div className='p-4 rounded-[15px] shadow-xl mb-5'>
                        <h2 className='font-semibold text-2xl'><span className='font-bold'>({post.company})</span> {post.title}</h2>
                        <p className='text-[#cccccc]'>{post.desc}</p>
                        <p><span className='font-semibold'>Location:</span> {post.loc}</p>
                        <p><span className='font-semibold'>Duration:</span> {post.duration}</p>
                        <p><span className='font-semibold'>Remote Work Policy:</span> {post.workpolicy}</p>
                        <p><span className='font-semibold'>Skills:</span> {post.skills}</p>
                        <p><span className='font-semibold'>Stipend:</span> {post.stipend}</p>
                        {post.cs!=0 && <p><span className='font-semibold'>{post.cs}</span> interns required from CS</p> }
                        {post.it!=0 && <p><span className='font-semibold'>{post.it}</span> interns required from IT</p> }
                        {post.eee!=0 && <p><span className='font-semibold'>{post.eee}</span> interns required from EEE</p> }
                        {post.ec!=0 && <p><span className='font-semibold'>{post.ec}</span> interns required from EC</p> }
                        {post.mec!=0 && <p><span className='font-semibold'>{post.mec}</span> interns required from MEC</p> }
                        {post.sf!=0 && <p><span className='font-semibold'>{post.sf}</span> interns required from SF</p> }
                        {post.ce!=0 && <p><span className='font-semibold'>{post.ce}</span> interns required from CE</p> }
                        <div className='flex'>
                            {post.verified ? <button className='rounded-[15px] text-white bg-green-300 px-5 py-2 mt-4 mr-5'>Verified</button> : <button onClick={handleVerify} className='rounded-[15px] text-white bg-green-500 px-5 py-2 mt-4 hover:bg-green-300 mr-5'>Mark as verified</button>}
                            {post.recruited ? <button className='rounded-[15px] text-white bg-red-300 px-5 py-2 mt-4 mr-5'>Recruited</button> : <button className='rounded-[15px] text-white bg-red-500 px-5 py-2 mt-4 mr-5'>Not Recruited</button>}
                        </div>
                        <div className='flex'>
                            {post.edit ? 
                                    <button onClick={handleNote} className='rounded-[15px] text-white bg-blue-300 px-5 py-2 mt-4 mr-5'>Return for correction</button> 
                                : 
                                <>
                                    <input onChange={e => setNote(e.target.value)} type="text" name="" className='mt-5 border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-5' placeholder='Enter notes...' id="" />
                                    <button onClick={handleNote} className='rounded-[15px] text-white bg-blue-500 px-5 py-2 mt-4 mr-5 hover:bg-blue-300'>Return for correction</button>
                                </>
                            }
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}

export default Admin