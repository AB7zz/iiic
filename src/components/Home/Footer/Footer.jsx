import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#0B1525] h-[100%] pl-52 py-20'>
      <div className='grid grid-cols-4'>
        <div>
          <h1 className='text-3xl text-white font-bold'>IIIC SOE</h1>
          <p className='text-[#C2C2C2]'>Official Internship Portal for Students of
School Of Engineering , CUSAT</p>
        </div>
        <div>
          <h3 className='text-white text-2xl'>Features</h3>
          <ul>
            <li className="text-[#C2C2C2]">Online Apply</li>
            <li className="text-[#C2C2C2]">Checking</li>
            <li className="text-[#C2C2C2]">Video Reference</li>
            <li className="text-[#C2C2C2]">Join Community</li>
            <li className="text-[#C2C2C2]">Nearby Jobs</li>
          </ul>
        </div>
        <div>
          <h3 className='text-white text-2xl'>About us</h3>
          <ul>
            <li className="text-[#C2C2C2]">Who we are</li>
            <li className="text-[#C2C2C2]">Privacy Policy</li>
            <li className="text-[#C2C2C2]">Terms & Conditions</li>
            <li className="text-[#C2C2C2]">FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className='text-white text-2xl'>Contact</h3>
          <ul>
            <li className="text-[#C2C2C2]">+91 977 8393558</li>
            <li className="text-[#C2C2C2]">iiic@cusat.ac.in</li>
          </ul>
        </div>
      </div>
    </div> 
  )
}

export default Footer