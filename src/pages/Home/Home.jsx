import React from 'react'
import Navbar from '../../components/Home/Navbar/Navbar'
import Hero from '../../components/Home/Hero/Hero'
import About from '../../components/Home/About/About'
import Cat from '../../components/Home/Cat/Cat'
import How from '../../components/Home/How/How'
import Footer from '../../components/Home/Footer/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        {/* <Cat/> */}
        <How/>
        <Footer/>
    </div>
  )
}

export default Home