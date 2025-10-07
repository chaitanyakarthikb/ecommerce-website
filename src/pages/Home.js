import React from 'react'
import styled from 'styled-components'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
import FeatureProducts from '../components/FeatureProducts'

const Wrapper = styled.section`
  background-color: ${({theme})=>theme.colors.bg};
  width: 100%;
  height : 100vh;
`

const Home = () => {

  const data = {
    name : "Basva Store"
  }

  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProducts/>
    <Services/>
    <Trusted/>
    
    </>
  )
}


export default Home