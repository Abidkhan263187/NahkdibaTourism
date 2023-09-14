import { Badge, Box, Button, Flex, Heading, Image, Text, border } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Nav } from './Nav';
import { BookCard, Slider } from './State';
import { StarIcon } from '@chakra-ui/icons';
import { Footer } from './Footer';
export const Places = () => {
  const { state, country, region } = useParams();
  const [places, setPlaces] = useState([]);
  const [hotel, setHotel] = useState([])
  const [gif, setGif] = useState("")

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://tired-cormorant.cyclic.app/tourism?Continent=${region}&CountryName=${country}&StateName=${state}`
        );
        const stateGif = response.data.data[0].state[0][0].stateGif
        console.log(stateGif)
        const place = response.data.data[0].state[0][0].places;
        const hotels = response.data.data[0].state[0][0].hotels;
        setGif(stateGif)
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
      {/* <Slider /> */}
      <Box >
        <Image id="slider_gif" src={gif} />
      </Box>
      <Heading>{state}</Heading>
      <Box h={'max-content'} gap={'10px'} display={'flex'} mb={'20px'} mt={"40px"}>


        <Box id="places_container" w={"70%"} >
          {places.map((elem, ind) => (
            <Box key={ind} id="place_main" >
              <Box className="card_container"  >
                <Box className="card-image" as='img' src={elem.images}></Box>
                <Box className="card-overlay">
                  <h3 className="card-title" style={{ fontWeight: "700", color: "orange" }}>{elem.StateName}</h3>
                  <p className="card-description">Explore the  famous places</p>
                  <Link to={`#`}> <Button colorScheme={'orange'} color={'white'} mt="10px" size="sm">Know more</Button></Link>
                </Box>
              </Box>

              <Box id="place_right" >
                <Heading size={'lg'} color={'gray.700'} > {elem.placeName}</Heading>
                <Text color={"gray.600"}>{elem.desc}
                </Text>
                <Button size={'sm'} colorScheme='orange' variant={'outline'} mt={'20px'} as={Link} to={'#'}>Read more</Button>
              </Box>
            </Box>
          ))}


        </Box>
        <Box id="hotel_container">
          <Heading size={'md'}>Hotels</Heading>
          {hotel && hotel.length > 0 && hotel.map((elem, ind) => {
            return (
              <Box p={'5px 5px 0px 5px'} margin={'auto'} maxW='sm' w={"90%"} borderWidth='1px' borderRadius='lg' >
                <Image margin={"auto"} w={"100%"} h={"100%"} src={elem.Image} alt="img" />
                <Box p='6' textAlign={'start'} >
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      New
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      2 beds &bull; 3 baths
                    </Box>
                  </Box>

                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {elem.HotelName}
                  </Box>

                  <Flex alignItems={'center'} justifyContent={'space-between'} > <strong>${elem.PriceRange}</strong><Box as='span' color='gray.600' fontSize='sm'> <s id="s">${elem.Mrp}</s></Box>
                    <p style={{ color: "green", fontWeight: "700" }}><strong>{elem.Discount} </strong>Off</p>
                  </Flex>

                  <Box display='flex' mt='2' alignItems='center'>
                    {Array(5).fill('').map((_, i) => (
                      <StarIcon key={i}
                        color={i < elem.Rating ? 'orange.500' : 'gray.300'} />
                    ))}
                    <Box as='span' ml='2' color='gray.500' fontSize='sm'>
                      {elem.Review} reviews
                    </Box>
                  </Box>
                  <Button w={'100%'} colorScheme='orange' size={'sm'} mt={'10px'}>Book</Button>
                </Box>
              </Box>
            )
          })}
        </Box>

      </Box>
      <BookCard img="https://img.freepik.com/premium-vector/happy-young-couple-traveling-with-suitcase-bags-isolated-cartoon-characters-vector-man-woman_316839-762.jpg?w=360" />
      <Footer />
    </Box>
  );
};
