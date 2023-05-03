import React from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

const url = 'http://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const View = () => {
    const [company, setCompany] = React.useState()
    const [logo, setLogo] = React.useState(null)
    const id = useLocation()
    const postEmail = id.pathname.split('/')[4]
    const postId = id.pathname.split('/')[5]
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
        const getData = async() => {
            try{
              if(sessionStorage.getItem('user')){
                const apiData = await axios.get(`${url}/api/companyDetails`, {
                    params:{
                        user: 'tcs@gmail.com'
                    },
                    headers: {
                      Authorization: sessionStorage.getItem('user')
                    }
                })
                setCompany(apiData.data.companyData.Interns[postId])
                const imageListRef = ref(storage, `${apiData.data.companyData.email}/`)
                listAll(imageListRef).then((response) => {
                    getDownloadURL(response.items[0]).then(url => {
                    setLogo(url)
                    })
                })
              }
            }catch(error){
              console.log('Error 4: ', error)
            }
        }
        checkIfAdmin()
        getData()
    }, [])
  return (
    <>
      <div className='grid grid-cols-3'>
        <div className='mt-40'>
            <img className='w-[250px] m-auto' src={logo} alt="company logo" />
        </div>
        {company && <><div className='flex flex-col w-[80%]'>
            <h3 className='text-2xl text-[#16255D] font-semibold mb-3'>Please Fill Your Details</h3>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Title</label>
                <input name='title' value={company.title} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'/>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Role Description</label>
                <textarea name='desc' value={company.desc} type="text" className='h-[250px] border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' ></textarea>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Skills</label>
                <input name='skills' value={company.skills} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' />
            </div>
            <div className='flex flex-col mb-5'>
              <label className='text-[#A0A2A4] ' htmlFor="">How many interns from each department?</label>
              <div className='flex mb-5'>
                  <input name='cs' value={company.cs} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Computer Science</p>
              </div>
              <div className='flex mb-5'>
                  <input name='it' value={company.it} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Information Technology</p>
              </div>
              <div className='flex mb-5'>
                  <input name='eee' value={company.eee} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Electrical Engineering</p>
              </div>
              <div className='flex mb-5'>
                  <input name='ec' value={company.ec} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Electronics & Communication</p>
              </div>
              <div className='flex mb-5'>
                  <input name='sf' value={company.sf} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Safety & Fire Engineering</p>
              </div>
              <div className='flex mb-5'>
                  <input name='mec' value={company.mec} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Mechanical Engineering</p>
              </div>
              <div className='flex mb-5'>
                  <input name='ce' value={company.ce} type="number" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-1 w-1/4 mr-3'/>
                  <p>from Civil Engineering</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col w-[80%] mt-12'>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Location</label>
                <input name='loc' value={company.loc} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Location' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Duration</label>
                <select name="duration" value={company.duration} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option value='2 months'>2 months</option>
                    <option value='4 months'>4 months</option>
                    <option value='6 months'>6 months</option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4]' htmlFor="">Remote Work Policy</label>
                <select name="workpolicy" value={company.workpolicy} id="" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3'>
                    <option value='On site'>On site</option>
                    <option value='Remote'>Remote</option>
                    <option value='Hybrid'>Hybrid</option>
                </select>
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Stipend (if any)</label>
                <input name='stipend' value={company.stipend} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Stipend' />
            </div>
            <div className='flex flex-col mb-5'>
                <label className='text-[#A0A2A4] ' htmlFor="">Contact no.</label>
                <input name='phone' value={company.phone} type="text" className='border border-[#A0A2A4] focus:border-[#A0A2A4] rounded-[12px] p-3' placeholder='Enter Stipend' />
            </div>
          </div></>}
      </div>
    </>
  )
}

export default View