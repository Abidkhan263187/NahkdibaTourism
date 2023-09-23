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
import { SectionOne } from './SectionOne';
import { SectionTwo_home } from './HomeSections/SectionTwo_home';
import { SectionThree } from './HomeSections/SectionThree';
import { SectionFour } from './HomeSections/SectionFour';
import { SectionFive } from './HomeSections/SectionFive';
import { Footer } from './Footer';
import {useNavigate} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux';
import { geolocator_coords, getCityName } from './geolocator';
import { FamousPlaces } from './HomeSections/FamousPlaces';

export const Home = () => {
  const city = {
    name: 'New York', // Replace with the name of the city you're interested in
    latitude: 40.7128, // Replace with the latitude of the city
    longitude: -74.0060, // Replace with the longitude of the city
  };

  const {lati,longi} =useSelector((store)=>store)
const dispatch=useDispatch()
  const navigate=useNavigate()

  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(geolocator_coords())
    
  }, []);

  useEffect(()=>{
    dispatch(getCityName(lati,longi))
  },[lati,longi])

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);


  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching...');
  };

  return (
    <><Box position="relative" overflow="hidden">

      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          zIndex: -1,
          overflow: 'hidden',
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
          <Button w={'30%'} colorScheme='orange' onClick={()=>navigate('/allcontinent')}>Plan Trip!</Button>
        </Box>
      </Center>
    </Box>
      <Box>
        <SectionOne />
        {/* <FamousPlaces city={city}/> */}
      </Box>
      <Box>
        <SectionTwo_home />
      </Box>
      <Box>
      <Heading> Special <span style={{color:"orange"}}>Offer</span></Heading>
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
