import React from 'react'
import axios from 'axios'
import { CompanyContext } from '../../Context/CompanyContextProvider'

const url = 'https://iiic-backend.herokuapp.com'
// const url = 'http://localhost:5000'

const Upload = () => {
    const {logo} = React.useContext(CompanyContext)
    const [upload, setUpload] = React.useState()
    const setUploadChange = (e) => {
        setUpload(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const uploadForm = async(e) => {
        e.preventDefault()
        const data = {
            name: "Abhinav C V",
            email: "abhinavcv007@gmail.com",
            message: "This is a test message"
        }
        try{
            const res = await axios.post(`${url}/api/uploadIntern`, upload, {
                headers: {
                    Authorization: sessionStorage.getItem('user'),
                    "Content-Type": "application/json"
                }
            })
            if(res.data.success == true){
                window.location.replace('/dashboard/successfulUpload')
            }
        }catch(error){
            console.log('Error 5: ', error)
        }
        
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:p-0 pl-12'>
        <div className='hidden md:block mt-40'>
            <img className='w-[250px] m-auto' src={logo} alt="company logo" />
        </div>
        <div className='flex flex-col w-[80%]'>
            <h3 className='text-2xl text-[#16255D] font-semibold mb-3'>Please Fill Your Details</h3>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Title</label>
                <input name='title' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Title' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Description</label>
                <textarea name='desc' onChange={setUploadChange} type="text" className='h-[100px] border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Description'></textarea>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Skills</label>
                <input name='skills' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Skills' />
            </div>
                <label className='text-[#A0A2A4] ' htmlFor="">How many interns from each department?</label>
            <div className='grid grid-cols-1 md:grid-cols-2 mb-5'>
                <div className='flex mb-5'>
                    <input name='cs' onChange={setUploadChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/2 md:w-1/4 mr-3'/>
                    <p>Computer Science</p>
                </div>
                <div className='flex mb-5'>
                    <input name='it' onChange={setUploadChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/2 md:w-1/4 mr-3'/>
                    <p>Information Technology</p>
                </div>
                <div className='flex mb-5'>
                    <input name='eee' onChange={setUploadChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/2 md:w-1/4 mr-3'/>
                    <p>Electrical Engineering</p>
                </div>
                <div className='flex mb-5'>
                    <input name='ec' onChange={setUploadChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/2 md:w-1/4 mr-3'/>
                    <p>Electrnoics & Communication</p>
                </div>
                <div className='flex mb-5'>
                    <input name='sf' onChange={setUploadChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/2 md:w-1/4 mr-3'/>
                    <p>Safety & Fire Engineering</p>
                </div>
                <div className='flex mb-5'>
                    <input name='mec' onChange={setUploadChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/2 md:w-1/4 mr-3'/>
                    <p>Mechanical Engineering</p>
                </div>
                <div className='flex mb-5'>
                    <input name='ce' onChange={setUploadChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/2 md:w-1/4 mr-3'/>
                    <p>Civil Engineering</p>
                </div>
            </div>
            
            
        </div>
        <div className='flex flex-col w-[80%] md:mt-12'>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Location</label>
                <input name='loc' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Location' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Duration</label>
                <select name="duration" onChange={setUploadChange} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option value='2 months' selected>2 months</option>
                    <option value='4 months'>4 months</option>
                    <option value='6 months'>6 months</option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Remote Work Policy</label>
                <select name="workpolicy" onChange={setUploadChange} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option value='On site' selected>On site</option>
                    <option value='Remote'>Remote</option>
                    <option value='Hybrid'>Hybrid</option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Stipend (if any)</label>
                <input name='stipend' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Stipend' />
            </div>
            <button onClick={uploadForm} className='text-white bg-blue-500 px-10 py-3 text-center rounded-[12px]'>Submit for review</button>
        </div>
    </div>
  )
}

export default Upload