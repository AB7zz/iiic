import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import HomeIcon from '@mui/icons-material/Home';
import {initializeApp} from 'firebase/app'

const Navbar2 = () => {
    const [toggle, setToggle] = React.useState(false)
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
    <nav className='bg-white py-4'>
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        <a href="#" className="flex items-center py-4 px-2">
                            <Link to="/dashboard/internship" className="font-bold text-2xl tracking-tight text-[#16255D]">IIIC SOE</Link>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to='/dashboard/internship' className="py-4 px-2 focus:text-[#2979F2] focus:border-b-4 focus:border-[#2979F2] font-semibold ">Dashboard</Link>
                        <Link to='/dashboard/internship/checkStatus' className="py-4 px-2 text-black-500 focus:border-b-4 focus:text-[#2979F2]  focus:border-[#2979F2] font-semibold hover:text-[#2979F2] transition duration-300">My Posts</Link>
                        <a href="#" className="py-4 px-2 text-black-500 focus:border-b-4 focus:text-[#2979F2]  focus:border-[#2979F2] font-semibold hover:text-[#2979F2] transition duration-300">Profile</a>
                        {/* <a href="#" className="py-4 px-2 text-black-500 focus:border-b-4 focus:text-[#2979F2]  focus:border-[#2979F2] font-semibold hover:text-[#2979F2] transition duration-300">Reports</a> */}
                        <button onClick={clickSignOut} to="/login" className="mr-5 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Log Out</button>
                        <Link to='/' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Home <HomeIcon/> </Link>
                    </div>
                </div>
                <div>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setToggle(!toggle)} className="outline-none mobile-menu-button">
                    <svg className=" w-6 h-6 text-black-500 hover:text-[#2979F2] "
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
            </div>
        </div>
        {toggle && <div className="mobile-menu">
            <ul className="mb-12 pl-4">
                <li className="active"><Link to='/dashboard/internship' className="block text-sm px-2 py-4 text-black font-semibold">Dashboard</Link></li>
                <li><Link to='/dashboard/internship/checkStatus' className="block text-sm px-2 py-4 text-black transition duration-300 font-semibold">My Posts</Link></li>
                <li><a className="block text-sm px-2 py-4 text-black transition duration-300 font-semibold">Profile</a></li>
                {/* <li><a className="block text-sm px-2 py-4 text-black transition duration-300 font-semibold">Reports</a></li> */}
                <li><button onClick={clickSignOut} to="/login" className="mb-12 mr-5 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Log Out</button></li>
                <li><Link to='/' className='ml-auto py-5 px-4 text-white bg-[#0A043C] rounded-[15px] font-semibold'>Home <HomeIcon/> </Link></li>
                
            </ul>
        </div>}
    </nav>


  )
}

export default Navbar2