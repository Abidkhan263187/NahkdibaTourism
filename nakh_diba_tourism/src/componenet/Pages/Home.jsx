import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  Center,
  Button,
  Heading,
} from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import video from '../video/back_video3.mp4';
import { Nav } from './Nav';
import { SectionTwo_home } from './HomeSections/SectionTwo_home';
import { SectionThree } from './HomeSections/SectionThree';
import { SectionFour } from './HomeSections/SectionFour';
import { SectionFive } from './HomeSections/SectionFive';
import { Footer } from './Footer';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { geolocator_coords, getCityName } from './geolocator';

import  { BookingCard } from './BookForm';


export const Home = () => {
  const { lati, longi } = useSelector((store) => store)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(geolocator_coords())

  }, []);

  useEffect(() => {
    dispatch(getCityName(lati, longi))
  }, [lati, longi])

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);


  return (
    <><Box position="relative" overflow="hidden">

      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          zIndex: -1,
          overflow: 'hidden'

        }}
      >
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Nav />
      <Center height="100vh">
        <Box
          mt={"100px"}
          // boxShadow="lg"
          w={['100%', '80%', '80%']}
          p={['10px', '15px']}
          borderRadius={'10px'}
          zIndex={1}
          position="relative"
        // border={"1px solid"}
        >
          <Text fontSize={['2xl', '3xl', '4xl']} color="gray.100" mb={4}>
            Explore the World!
          </Text>
          <Button w={'30%'} backgroundColor=' #037dab' color={'white'} onClick={() => navigate('/allcontinent')}>Plan Trip!</Button>
        </Box>
      </Center>
    </Box>
      <Box>
        {/* <SectionOne /> */}
        {/* <Heading mt={'7%'}> Book <span style={{ color: ' #037dab' }}>Your Trip!</span> </Heading> */}
        {/* <BookingCard /> */}
        {/* <FamousPlaces city={city}/> */}
      </Box>
      <Box>
        <SectionTwo_home />
      </Box>
      <Box>
        <Heading> Special <span style={{ color: " #037dab" }}>Offer</span></Heading>
        <SectionThree />
      </Box>
      <Box>
        <SectionFour />
      </Box>
      <Box>
        <SectionFive />
      </Box>
      <footer>
        <Footer />
      </footer>

    </>
  );
};
