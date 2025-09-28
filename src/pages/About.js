import React from 'react'
import HeroSection from '../components/HeroSection'

const About = () => {
   const data = {
    name : "CK Ecommerce"
  }

  return (
    <HeroSection myData={data}/>
  )
}

export default About