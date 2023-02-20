import React from 'react'
import companyLogo from '../../../../assets/company-logo.png'
import axios from 'axios'

const url = 'https://iiic-backend.herokuapp.com'

const Upload = () => {
    const [upload, setUpload] = React.useState()
    const setUploadChange = (e) => {
        setUpload(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const uploadForm = async(e) => {
        e.preventDefault()
        console.log(upload)
        try{
            const res = await axios.post(`${url}/api/uploadIntern`, upload, {
                headers: {
                    Authorization: localStorage.getItem('user'),
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
    <div className='grid grid-cols-3'>
        <div className='mt-40'>
            <img className='w-[250px] m-auto' src={companyLogo} alt="company logo" />
        </div>
        <div className='flex flex-col w-[80%]'>
            <h3 className='text-2xl text-[#16255D] font-semibold mb-3'>Please Fill Your Details</h3>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Title</label>
                <input name='title' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Title' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Description</label>
                <textarea name='desc' onChange={setUploadChange} type="text" className='h-[250px] border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Description'></textarea>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Skills</label>
                <input name='skills' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Skills' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Tags</label>
                <input name='tags' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Tags' />
            </div>
            
            
        </div>
        <div className='flex flex-col w-[80%] mt-12'>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Location</label>
                <input name='loc' onChange={setUploadChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Location' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Duration</label>
                <select name="duration" onChange={setUploadChange} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option>Select Option</option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Remote Work Policy</label>
                <select name="workpolicy" onChange={setUploadChange} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option>Select Option</option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Experience Required</label>
                <select name="experience" onChange={setUploadChange} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option>Select Option</option>
                    <option></option>
                    <option></option>
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