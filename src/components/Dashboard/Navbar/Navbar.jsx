import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import { getAuth, signOut } from "firebase/auth";
import {initializeApp} from 'firebase/app'



const Navbar = () => {
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
  const clickSignOut = () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        sessionStorage.removeItem('user')
        window.location.replace('/login')
      }).catch((error) => {
        console.log('Error 23: ', error)
      });
  }
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent pt-6 pb-6 pl-24 pr-8 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/dashboard/internship" className="font-bold text-2xl tracking-tight text-[#16255D]">IIIC SOE</Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-around">
        <div className="text-sm lg:flex-grow">
          <Link to='/dashboard/internship' className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2] mr-4">
            Dashboard
          </Link>
          <Link to='/dashboard/internship/checkStatus' className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2] mr-4">
            My Posts
          </Link>
          {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2] mr-4">
            Interns
          </a> */}
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2] mr-4">
            Profile
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2]">
            Reports
          </a>
        </div>
        <div>
          <button onClick={clickSignOut} to="/login" className="mr-5 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Log Out</button>
          <Link to='/' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Home <HomeIcon/> </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar