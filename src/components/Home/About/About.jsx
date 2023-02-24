import React from 'react'
import about from '../../../assets/about.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const About = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 py-32'>
      <div className='md:pl-20'>
        <div className='hidden md:block rounded bg-white bg-opacity-100 px-4 py-5 absolute rounded-[12px] left-[385px] top-[1200px]'>
          <div>
            <h3 className='font-bold text-2xl mb-4'>Our Divisions</h3>
            <p className='font-semibold'>Civil Engineering</p>
            <p className='text-[#2979F2] font-semibold'>Computer Science Engineering</p>
            <p className='font-semibold'>Mechanical Engineering</p>
            <p className='text-[#2979F2] font-semibold'>Electronics Engineering</p>
            <p className='font-semibold'>Electrical Engineering</p>
            <p className='text-[#2979F2] font-semibold'>Information Technology</p>
            <p className='font-semibold'>Safety & Fire Engineering</p>
            <p className='text-[#2979F2] font-semibold'>Applied Science & Humanities</p>
          </div>
        </div>
        <img className='md:w-[70%] w-[50%] m-auto md:m-[0]' src={about} alt="about" />
      </div>
      <div className='md:pl-16 pl-8'>
        <h2 className='font-bold text-2xl md:text-4xl text-[#0A043C]'>Engineering Talent Hub:</h2>
        <h2 className='font-bold text-2xl md:text-4xl text-[#0A043C]'>School of Engineering, CUSAT</h2>
        <p className='text-[#6F6A6A] mt-4 pr-36'>Attract top talent to your organization by posting internships and projects with the School of Engineering at CUSAT. Our faculty and students are at the forefront of engineering innovation, working to create solutions that make a positive impact on the world. With a diverse range of specialties, state-of-the-art facilities, and a commitment to excellence, the School of Engineering is a leader in engineering education. Our graduates are highly sought after by industries across the globe, making CUSAT the perfect place to find top-notch talent for your organization. Join us in shaping the future of engineering and post your opportunities today!</p>
        <button className="bg-blue-500 text-white px-4 py-3 mt-5 font-semibold rounded-[10px] text-sm">Visit SOE <ArrowRightAltIcon/> </button>
      </div>
    </div>
  )
}

export default About