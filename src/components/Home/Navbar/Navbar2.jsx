import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContext } from '../Context/HomeContextProvider'

const Navbar2 = () => {
    const {isLogin, admin} = React.useContext(HomeContext)
    const [toggle, setToggle] = React.useState(false)
  return (  
    <nav className='bg-white md:absolute'>
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        <a href="#" className="flex items-center py-4 px-2">
                            <Link to="/" className="font-bold text-2xl tracking-tight text-[#16255D]">IIIC SOE</Link>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-4 px-2 focus:text-[#2979F2] focus:border-b-4 focus:border-[#2979F2] font-semibold ">Home</a>
                        <a href="#" className="py-4 px-2 text-black-500 focus:border-b-4 focus:text-[#2979F2]  focus:border-[#2979F2] font-semibold hover:text-[#2979F2] transition duration-300">Services</a>
                        <a href="#" className="py-4 px-2 text-black-500 focus:border-b-4 focus:text-[#2979F2]  focus:border-[#2979F2] font-semibold hover:text-[#2979F2] transition duration-300">About</a>
                        <a href="#" className="py-4 px-2 text-black-500 focus:border-b-4 focus:text-[#2979F2]  focus:border-[#2979F2] font-semibold hover:text-[#2979F2] transition duration-300">Contact Us</a>
                        {(isLogin && !admin) 
                            ? <><Link to="/dashboard/internship" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Dashboard</Link></> 
                        
                            : (isLogin && admin) 
                            ? <><Link to="/admin" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Admin Panel</Link></> 
                        
                            : <Link to="/login" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Sign In</Link>
                        }
                    </div>
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
            <ul className="">
                <li className="active"><a className="block text-sm px-2 py-4 text-black font-semibold">Home</a></li>
                <li><a className="block text-sm px-2 py-4 text-black transition duration-300 font-semibold">Services</a></li>
                <li><a className="block text-sm px-2 py-4 text-black transition duration-300 font-semibold">About</a></li>
                <li><a className="block text-sm px-2 py-4 text-black transition duration-300 font-semibold">Contact Us</a></li>
                {(isLogin && !admin) 
                    ? <><Link to="/dashboard/internship" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Dashboard</Link></> 
                
                    : (isLogin && admin) 
                    ? <><Link to="/admin" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Admin Panel</Link></> 
                
                    : <Link to="/login" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Sign In</Link>
                }
            </ul>
        </div>}
    </nav>


  )
}

export default Navbar2