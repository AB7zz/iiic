import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import cusatLogo from '../../assets/cusat-logo.png'
import axios from 'axios'
import {initializeApp} from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const url = 'https://iiic-backend.herokuapp.com'
//const url = 'http://localhost:5000'

const Register = () => {
    if(localStorage.getItem('user')){
        window.location.replace('/dashboard/internship')
    }
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
        createUserWithEmailAndPassword(auth, account.email, account.pass)
            .then(async(userCredential) => {
                const user = userCredential.user;
                console.log(user.accessToken)
                const res = await axios.post(`${url}/api/register`, account, {
                    headers: {
                        Authorization: `${user.accessToken}`
                    }
                })
                if(res.data.success == true){
                    localStorage.setItem('user', user.accessToken)
                    if(account.type === 'admin'){
                      window.location.replace('/admin')
                    }else{
                      window.location.replace('/dashboard/internship')
                    }
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
  return (
    <div className='py-10 px-5'>
      <Link to='/' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Home <HomeIcon/> </Link>
      <div className='mt-20 grid grid-cols-2'>
        <div className='justify-self-center'>
            <img className='ml-20' src={cusatLogo} alt="cusat logo" />
            <h2 className='text-[#16255D] text-center font-bold text-5xl'>IIIC SOE</h2>
            <h4 className='text-[#0A043C] text-center font-bold text-5xl'>Register Portal</h4>
            {/* <p className='mt-10 text-[#969696] text-center font-bold'>Choose Account Type and Enter the Credentials</p> */}
        </div>
        <div className='rounded-[20px] shadow-xl flex flex-col py-12 px-5'>
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Type of Account</label>
            <select onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' name="type" id="" required>
              <option value="">Select Option</option>
              <option value="company">Company</option>
              <option value="admin">Admin</option>
            </select>
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Email</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="email" name="email" placeholder='Enter Email' />
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Password</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="password" name="pass" placeholder='Enter Password' />

            <label className='mb-3 text-2xl font-semibold' htmlFor="">Department</label>
            <select onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' name="dept" id="" required>
              <option value="">Select Option</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="EEE">EEE</option>
              <option value="EC">EC</option>
              <option value="SF">SF</option>
              <option value="MEC">MEC</option>
            </select>
                       
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Name of Company</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="text" name="company" placeholder='Enter Name' />
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Industry</label>
            <select onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' name="industry" id="">
              <option value="none1">Selection Industry</option>
              <option value="none2">Selection Industry</option>
              <option value="none3">Selection Industry</option>
            </select>
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Description of your company</label>
            <textarea onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="text" name="desc" placeholder='Enter Description' />
            
            {/* <label className='mb-3 text-2xl font-semibold' htmlFor="">Upload Logo</label>
            <input onChange={setAccountChange} className='mb-5' type="file" name="logo" id="" /> */}
            
            <p className='font-semibold mb-4'>Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>
            <button onClick={submitRegister} className='w-[80%] bg-blue-500 text-white px-10 py-3 font-semibold rounded text-center'>REGISTER</button>
        </div>  
      </div>
    </div>
  )
}

export default Register