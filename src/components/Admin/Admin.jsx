import React from 'react'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const Admin = () => {
    const [posts, setPosts] = React.useState()
    React.useEffect(() => {
        const checkIfAdmin = async() => {
            const res = await axios.get(`${url}/api/checkAdmin`,{
                headers: {
                    Authorization: localStorage.getItem('user')
                }
            })
            if(res.data.status == false){
                window.location.replace('/dashboard/internship')
            }
        }
        const fetchPosts = async() => {
            const res = await axios.get(`${url}/api/getInternshipPosts`,{
                headers:{
                    Authorization: localStorage.getItem('user')
                }
            })
            if(res.data.posts){
                console.log(res.data.posts)
                setPosts(res.data.posts)
            }
        }
        checkIfAdmin()
        fetchPosts()
    }, [])

    
    return (
        <>
            <div className='flex flex-col p-5'>
                {posts && posts.map(post => {
                    const handleVerify = async() => {
                        try {
                            console.log('this is called')
                            const res = await axios.post(`${url}/api/verifyPost`, post, {
                                headers: {
                                    Authorization: localStorage.getItem('user')
                                }
                            })
                            if(res.data.success == true){
                                location.reload()
                            }
                        } catch (error) {
                            console.log('Error 9: ', error)
                        }
                    }
                    return(
                    <div className='p-4 rounded-[15px] shadow-xl mb-5'>
                        <h2 className='font-semibold text-2xl'><span className='font-bold'>({post.company})</span> {post.title}</h2>
                        <p className='text-[#cccccc]'>{post.desc}</p>
                        <p><span className='font-semibold'>Location:</span> {post.loc}</p>
                        <p><span className='font-semibold'>Duration:</span> {post.duration}</p>
                        <p><span className='font-semibold'>Remote Work Policy:</span> {post.workpolicy}</p>
                        <p><span className='font-semibold'>Experience Required:</span> {post.experience}</p>
                        <p><span className='font-semibold'>Skills:</span> {post.skills}</p>
                        <p><span className='font-semibold'>Stipend:</span> {post.stipend}</p>
                        <div className='flex'>
                            {post.verified ? <button className='rounded-[15px] text-white bg-green-300 px-5 py-2 mt-4 mr-5'>Verified</button> : <button onClick={handleVerify} className='rounded-[15px] text-white bg-green-500 px-5 py-2 mt-4 hover:bg-green-300 mr-5'>Mark as verified</button>}
                            {post.recruited ? <button className='rounded-[15px] text-white bg-red-300 px-5 py-2 mt-4 mr-5'>Recruited</button> : <button className='rounded-[15px] text-white bg-red-500 px-5 py-2 mt-4 mr-5'>Not Recruited</button>}
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}

export default Admin