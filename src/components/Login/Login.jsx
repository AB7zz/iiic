import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import cusatLogo from '../../assets/cusat-logo.png'
import {initializeApp} from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [account, setAccount] = React.useState({
    email: '',
    pass: ''
  })
  const setAccountChange = (e) => {
    setAccount(prevState => ({
        ...prevState, [e.target.name]: e.target.value
      }))
  }
  const submitLogin = async() => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, account.email, account.pass)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('user', user.accessToken)
        console.log(user)
        window.location.replace('/dashboard/internship')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });                               
  }
  React.useEffect(() =>{
    if(localStorage.getItem('user')){
      window.location.replace('/dashboard/internship')
    }
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

  return (
    <div className='py-10 px-5'>
      <Link to='/' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Home <HomeIcon/> </Link>
      <div className='mt-20 grid grid-cols-2'>
        <div className='justify-self-center'>
            <img className='ml-20' src={cusatLogo} alt="cusat logo" />
            <h2 className='text-[#16255D] text-center font-bold text-5xl'>IIIC SOE</h2>
            <h4 className='text-[#0A043C] text-center font-bold text-5xl'>Login Portal</h4>
            <p className='mt-10 text-[#969696] text-center font-bold'>Choose Account Type and Enter the Credentials</p>
        </div>
        <div className='rounded-[20px] shadow-xl flex flex-col py-12 px-5'>
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Email</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="email" name="email" placeholder='Enter Email' />
            
            <label className='mb-3 text-2xl font-semibold' htmlFor="">Password</label>
            <input onChange={setAccountChange} className='mb-5 border-b-2 border-[#C2C2C2]' type="password" name="pass" placeholder='Enter Password' />
            
            <p className='font-semibold mb-4'>Do not have an account? <Link to='/register' className='text-blue-500'>Create one</Link></p>
            <button onClick={submitLogin} to='/dashboard/internship' className='w-[80%] bg-blue-500 text-white px-10 py-3 font-semibold rounded text-center'>LOGIN</button>
        </div>  
      </div>
    </div>
  )
}

export default Login