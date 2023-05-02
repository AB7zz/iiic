import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import cusatLogo from '../../assets/cusat-logo.png'
import axios from 'axios'
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {ref, uploadBytes, getStorage} from 'firebase/storage'

//const url = 'http://iiic-backend.herokuapp.com'
const url = 'http://localhost:5000'

const Register = () => {
  const [logo, setLogo] = React.useState(null)
  const [type, setType] = React.useState('company')
  const navigate = useNavigate()
    React.useEffect(() =>{
        const firebaseConfig = {
          apiKey: "AIzaSyBAVeMwDYCI2sQ6ODZ0Mt7V9TgmkEqAyJQ",
          authDomain: "iiic-4066e.firebaseapp.com",
          projectId: "iiic-4066e",
          storageBucket: "iiic-4066e.appspot.com",
          messagingSenderId: "804747626096",
          appId: "1:804747626096:web:80f0a28549dae31c23d6b5",
          measurementId: "G-7FY3B0EFDG"
        };
        
        initializeApp(firebaseConfig);
      }, [])
    const [account, setAccount] = React.useState({
      type: '',
      email: '',
      pass: '',
      dept: '',
      company: '',
      industry: '',
      desc: ''
    })
    const setAccountChange = (e) => {
        setAccount(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }))
    }
    const submitRegister = (e) => {
        e.preventDefault()
        const auth = getAuth();
        const storage = getStorage()
        if(logo != null){
          const imageRef = ref(storage, `${account.email}/logo.png`)
          uploadBytes(imageRef, logo).then(() => {
            console.log('Image uploaded')
          })
        }
        createUserWithEmailAndPassword(auth, account.email, account.pass)
            .then(async(userCredential) => {
                const user = userCredential.user;
                console.log(user.accessToken)
                const res = await axios.post(`${url}/api/register`, {account, type}, {
                    headers: {
                        Authorization: sessionStorage.getItem('user')
                        // Authorization: `${user.accessToken}`
                    }
                })
                if(res.data.success == true){
                    window.location.replace('/iiic/admin')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                console.log(errorCode, errorMessage)
            });
    }
  return (
    <div className='py-10 px-5'>
      <Link to='/admin' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Admin Panel <HomeIcon/> </Link>
      <div className='mt-20 grid grid-cols-1 md:grid-cols-2'>
        <div className='justify-self-center'>
            <img className='ml-20' src={cusatLogo} alt="cusat logo" />
            <h2 className='text-[#16255D] text-center font-bold text-5xl'>IIIC SOE</h2>
            <h4 className='text-[#0A043C] text-center font-bold text-5xl'>Register Portal</h4>
            {/* <p className='mt-10 text-[#969696] text-center font-bold'>Choose Account Type and Enter the Credentials</p> */}
        </div>
        <div className='rounded-[20px] shadow-xl flex flex-col py-12 px-5'>
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Type of Account</label>
            <select onChange={(e) => { setType(e.target.value) }} className='mb-5 border-b-2 border-[#C2C2C2]' name="type" id="" required>
              <option value="company" selected>Company</option>
              <option value="admin">Admin</option>
            </select>
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Email</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="email" name="email" placeholder='Enter Email' required/>
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Password</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="password" name="pass" placeholder='Enter Password' required/>

            {(type != "company") && <><label className='mb-3 text-2xl font-semibold' htmlFor="">Department</label>
            <select onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' name="dept" id="" required>
              <option value="">Select Option</option>
              <option value="core">Core Admin</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="EEE">EEE</option>
              <option value="EC">EC</option>
              <option value="SF">SF</option>
              <option value="MEC">MEC</option>
              <option value="CE">CE</option>
            </select></>}
                       
            {(type != "admin") && <><label className='mb-3 text-2xl font-semibold' htmlFor="">Name of Company</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="text" name="company" placeholder='Enter Name' required/>
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Industry</label>
            <select onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' name="industry" id="" required>
              <option value="none">Selection Industry</option>
              <option value="Computer Science and Information Technology">Computer Science and Information Technology</option>
              <option value="Fire and Safety">Fire and Safety</option>
              <option value="Automotive">Automotive</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Electrical and Electronics">Electrical and Electronics</option>
            </select>
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Description of your company</label>
            <textarea onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="text" name="desc" placeholder='Enter Description' required/>
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Upload Logo</label>
            <input onChange={e => setLogo(e.target.files[0])} className='mb-5' type="file" name="logo" id="" required/></>}
            
            <button onClick={submitRegister} className='w-[80%] bg-blue-500 text-white px-10 py-3 font-semibold rounded text-center'>REGISTER</button>
        </div>  
      </div>
    </div>
  )
}

export default Register