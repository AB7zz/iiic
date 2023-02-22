import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const url = 'https://iiic-backend.herokuapp.com'

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
                {posts && posts.map(data => (
                    <div className='p-4 rounded-[15px] shadow-xl mb-5'>
                        <h2 className='font-semibold text-2xl'><span className='font-bold'>({data.company})</span> {data.title}</h2>
                        <p className='text-[#cccccc]'>{data.desc}</p>
                        <p><span className='font-semibold'>Location:</span> {data.loc}</p>
                        <p><span className='font-semibold'>Duration:</span> {data.duration}</p>
                        <p><span className='font-semibold'>Remote Work Policy:</span> {data.workpolicy}</p>
                        <p><span className='font-semibold'>Experience Required:</span> {data.experience}</p>
                        <p><span className='font-semibold'>Skills:</span> {data.skills}</p>
                        <p><span className='font-semibold'>Stipend:</span> {data.stipend}</p>
                        <button className='rounded-[15px] text-white bg-green-500 px-5 py-2 mt-4 hover:bg-green-400'>Verify</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Admin