import React from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import { CompanyContext } from '../../Context/CompanyContextProvider'
const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const Edit = () => {
    const {logo, companyDetail} = React.useContext(CompanyContext)
    const [edit, setEdit] = React.useState()
    const id = useLocation()
    const postId = id.pathname.split('/')[5]
    React.useEffect(() => {
      if(companyDetail) setEdit(companyDetail.Interns[postId])
    }, [])
    const setEditChange = (e) => {
        setEdit(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }

    const editForm = async(e) => {
        e.preventDefault()
        console.log(edit)
        try{
            const res = await axios.post(`${url}/api/editIntern`, edit, {
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
    <>
      <div className='grid grid-cols-3'>
        <div className='mt-40'>
            <img className='w-[250px] m-auto' src={logo} alt="company logo" />
        </div>
        {edit && <><div className='flex flex-col w-[80%]'>
            <h3 className='text-2xl text-[#16255D] font-semibold mb-3'>Please Fill Your Details</h3>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Title</label>
                <input name='title' defaultValue={edit.title} onChange={setEditChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Title' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Description</label>
                <textarea name='desc' defaultValue={edit.desc} onChange={setEditChange} type="text" className='h-[250px] border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Description'></textarea>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Skills</label>
                <input name='skills' defaultValue={edit.skills} onChange={setEditChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Skills' />
            </div>
            <div className='flex flex-col mb-5'>
              <label className='text-[#A0A2A4] ' htmlFor="">How many interns from each department?</label>
              <div className='flex mb-5'>
                  <input name='cs' defaultValue={edit.cs} onChange={setEditChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Computer Science</p>
              </div>
              <div className='flex mb-5'>
                  <input name='it' defaultValue={edit.it} onChange={setEditChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Information Technology</p>
              </div>
              <div className='flex mb-5'>
                  <input name='eee' defaultValue={edit.eee} onChange={setEditChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Electrical Engineering</p>
              </div>
              <div className='flex mb-5'>
                  <input name='ec' defaultValue={edit.ec} onChange={setEditChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Electrnoics & Communication</p>
              </div>
              <div className='flex mb-5'>
                  <input name='sf' defaultValue={edit.sf} onChange={setEditChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Safety & Fire Engineering</p>
              </div>
              <div className='flex mb-5'>
                  <input name='mec' defaultValue={edit.mec} onChange={setEditChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Mechanical Engineering</p>
              </div>
              <div className='flex mb-5'>
                  <input name='ce' defaultValue={edit.ce} onChange={setEditChange} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Civil Engineering</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[80%] mt-12'>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Location</label>
                <input name='loc' defaultValue={edit.loc} onChange={setEditChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Location' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Duration</label>
                <select name="duration" defaultValue={edit.duration} onChange={setEditChange} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option value='2 months' selected>2 months</option>
                    <option value='4 months'>4 months</option>
                    <option value='6 months'>6 months</option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4]' htmlFor="">Remote Work Policy</label>
                <select name="workpolicy" defaultValue={edit.workpolicy} onChange={setEditChange} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option value='On site' selected>On site</option>
                    <option value='Remote'>Remote</option>
                    <option value='Hybrid'>Hybrid</option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Stipend (if any)</label>
                <input name='stipend' defaultValue={edit.stipend} onChange={setEditChange} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Stipend' />
            </div>
            <button onClick={editForm} className='text-white bg-blue-500 px-10 py-3 text-center rounded-[12px]'>Confirm Edits</button>
          </div></>}
      </div>
    </>
  )
}

export default Edit