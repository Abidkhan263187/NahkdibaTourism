import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Nav } from './Nav';
import { Slider } from './State';
export const Places = () => {
  const { state, country, region } = useParams();
  const [places, setPlaces] = useState([]);
  const [hotel,setHotel]=useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://tired-cormorant.cyclic.app/tourism?Continent=${region}&CountryName=${country}&StateName=${state}`
        );
        const place = response.data.data[0].state[0][0].places;
        const hotels = response.data.data[0].state[0][0].hotels;
        setHotel(hotels)
        setPlaces(place);
        console.log(hotels);
      } catch (error) {
        console.log(error, 'error while fetching state data');
      }
    })();
  }, []);

  return (
    <Box>
      <Nav />
      <Slider />
      <Heading>{state}</Heading>
      <Box  border={'1px solid blue'} h={'max-content'} gap={'10px'} display={'flex'} mb={'20px'} mt={"40px"}>

    
      <Box id="places_container" w={"70%"} >
        {places.map((elem, ind) => (
          <Box key={ind} id="place_main" display={'flex'} padding="20px">
            <Box className="card_container"  >
              <Box className="card-image" as='img' src="https://www.holidify.com/images/cmsuploads/compressed/Qutub_Minar_in_the_monsoons_20170908115259.jpg"></Box>
              <Box className="card-overlay">
                <h3 className="card-title" style={{ fontWeight: "700", color: "orange" }}>{elem.StateName}</h3>
                <p className="card-description">Explore the  famous places</p>
                <Link to={`#`}> <Button colorScheme={'orange'} color={'white'} mt="10px" size="sm">Know more</Button></Link>
              </Box>
            </Box>

            <Box id="place_right" >
              <Heading size={'lg'} color={'gray.700'} > {elem.placeName}</Heading>
              <Text color={"gray.600"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate tempora architecto sequi. Animi dolores molestiae odit
                quis ullam ipsa dolor architecto totam quia incidunt, cupiditate,
                delectus aperiam modi eum eveniet.
              </Text>
              <Button size={'sm'} colorScheme='orange' variant={'outline'} mt={'20px'} as={Link} to={'#'}>Read more</Button>
            </Box>
          </Box>
        ))}


      </Box>
      <Box id="hotel_container">
  {hotel && hotel.length > 0 && hotel.map((elem, ind) => {
    return (
      <Box display={'grid'} borderRadius={'10px'} gridTemplateColumns={'repeat'} border={'1px solid'} key={ind}>
        <Box h={'50%'}>
          <Image borderRadius={'10px 10px 0px 0px'} w={'100%'} src={elem.Image1} />
        </Box>
        <Box p={' 10px'} textAlign={'start'}>
          <Text>{elem.HotelName}</Text>
          <Text>{elem.Mrp}</Text>
          <Text>{elem.PriceRange}</Text>
          <Text>{elem.Rating}</Text>
        </Box>
      </Box>
    )
  })}
</Box>

      </Box>
      
    </Box>
  );
};
