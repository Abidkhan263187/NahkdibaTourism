import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { BookCard } from './BookCard'
import BookForm from './BookForm'
import {SectionThree} from './HomeSections/SectionThree'
import { Heading } from '@chakra-ui/react'





export const Booking = () => {
  return (
    <div>
        <Nav/>
        <BookForm />
        <Heading mt={'10%'} size={'lg'}>Make Your  <span style={{color:"orange"}}>Trip  EnjoyFull!</span>  with Awesome <span style={{color:"orange"}}>Packages</span> </Heading>
        <SectionThree/>
        <BookCard img="https://www.transparentpng.com/thumb/travel/RALK0S-travel-suitcase-airplane-photo-tour-clipart-photo.png" />
        <Footer/>
    </div>
  )
}
