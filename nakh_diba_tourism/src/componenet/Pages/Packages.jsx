import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { SectionThree } from './HomeSections/SectionThree'
import { Heading } from '@chakra-ui/react'

export const Packages = () => {
  return (
    <div>
        <Nav/>
        <Heading mt={"30px"}>Best <span style={{color:"orange"}}>Packages</span> </Heading>
        <SectionThree/>
        <Footer/>
    </div>
  )
}
