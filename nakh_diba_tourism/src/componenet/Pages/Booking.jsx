import React, { useEffect } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { BookCard } from './BookCard'
import BookForm from './BookForm'
import {SectionThree} from './HomeSections/SectionThree'
import { Heading } from '@chakra-ui/react'
import {Review} from './Review'
import ReviewBox from './ReviewBox'





export const Booking = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  return (
    <div>
        <Nav/>
        <BookForm />
        <ReviewBox/>
        <Heading mt={'10%'} size={'lg'}>Make Your  <span style={{color:"orange"}}>Trip  Full Of Enjoy!</span>  With Awesome <span style={{color:"orange"}}>Packages</span> </Heading>
        <SectionThree/>
        <BookCard img="https://www.transparentpng.com/thumb/travel/RALK0S-travel-suitcase-airplane-photo-tour-clipart-photo.png" />
        <Review/>
        <Footer/>
    </div>
  )
}
