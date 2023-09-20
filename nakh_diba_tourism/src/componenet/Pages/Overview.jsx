import React from 'react'
import { Nav } from './Nav'
import { Events_News } from './Events_News'
import { Footer } from './Footer'
import { SectionThree } from './HomeSections/SectionThree'
import { Heading } from '@chakra-ui/react'

export const Overview = () => {
  return (
    <div>
        <Nav/>
        <Events_News/>
        <Heading>Explore And <span style={{color:"orange"}}> Book Package</span></Heading>
        <SectionThree/>
        <Footer/>
    </div>
  )
}
