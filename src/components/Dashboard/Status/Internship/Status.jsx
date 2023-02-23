import React from 'react'
import Company from '../../Company/Company'
import './style.css'
import { CompanyContext } from '../../Context/CompanyContextProvider'
import axios from 'axios'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom'


const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'


const Status = () => {
  const {companyDetail} = React.useContext(CompanyContext)
  const items = [];
  if(companyDetail){
      for(const key in companyDetail.Interns){
        const value = companyDetail.Interns[key]
        items.push(value)
      }
  }
  return (
    <>
        <div className='grid grid-cols-3 mb-5'>
            <Company className='grid-span-1'/>
            <div className='w-full'>
                <h2 className='text-3xl text-[#16255D] font-semibold mb-3'>Posts Details</h2>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>Post Title</th>
                            <th>Post Description</th>
                            <th>Category</th>
                            <th>Verification Status</th>
                            <th>Recruitment Status</th>
                            <th>Edit</th>
                            <th>Notes from Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items.map(post => {
                            const handleRecruited = async() => {
                                try {
                                    console.log('this is called')
                                    const res = await axios.post(`${url}/api/recruited`, post, {
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
                            return(
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.desc}</td>
                                <td>{post.title}</td>
                                {post.verified ? <td className='text-green-500 font-semibold'>Verified</td> : <td className='text-red-500 font-semibold'>Not Verified</td>}
                                {post.recruited ? <td><button className='rounded-[15px] text-white bg-red-300 px-5 py-2 mt-4 mr-5'>Recruited</button></td> : <td><button onClick={handleRecruited} className='rounded-[15px] text-white bg-red-500 px-5 py-2 mt-4 mr-5 hover:bg-red-300'>Mark as Recruited</button></td>}
                                {post.edit ? <td><Link to={`/dashboard/internship/edit/${post.email}/${post.id}`}><BorderColorIcon className='text-blue-500'/></Link></td> : <td><BorderColorIcon className='text-blue-200'/></td>}
                                <td>{post.note}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Status