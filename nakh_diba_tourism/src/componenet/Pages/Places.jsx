import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Skeleton,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { Nav } from './Nav';
import { BookCard } from './BookCard';
import { Footer } from './Footer';
import { Review } from './Review';

export const Places = () => {
  const navigate = useNavigate();
  const { state, country, region } = useParams();
  const [places, setPlaces] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL}/tourism?Continent=${region}&CountryName=${country}&StateName=${state}`
        );
        const stateGif = response.data.data[0].state[0][0].stateGif;
        console.log(stateGif);
        const place = response.data.data[0].state[0][0].places;
        const hotels = response.data.data[0].state[0][0].hotels;
        setGif(stateGif);
        setHotel(hotels);
        setPlaces(place);
        setLoading(false);
        console.log(hotels);
      } catch (error) {
        console.log(error, 'error while fetching state data');
      }
    })();
  }, []);

  const handleBook = (hotel) => {
    localStorage.setItem('hotel', JSON.stringify(hotel));
    localStorage.setItem('bookStyle', JSON.stringify('hotel'));
    localStorage.setItem('package', JSON.stringify(''));
    navigate('/book');
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return (
    <Box>
      <Nav />
      {region === 'Asia' && (
        <Box>
          {loading ? (
            <Skeleton height="200px" />
          ) : (
            <Image id="slider_gif" src={gif} />
          )}
        </Box>
      )}

      {loading ? (
        <Skeleton height="40px" width="80%" my="10px" mx="auto" />
      ) : (
        <Heading w={'95%'} m={'auto'} borderRadius={'5px'} color={'white'} backgroundColor={'#037dab'}>
          {state}
        </Heading>
      )}

      <Box
        h={'max-content'}
        gap={'10px'}
        display={['grid', 'grid', 'grid', 'flex']}
        mb={'20px'}
        mt={'40px'}
      >
        <Box id="places_container">
          {loading ? (
            // Render skeletons for places while loading
            Array.from({ length: 4 }, (_, ind) => (
              <Skeleton key={ind} height="200px" />
            ))
          ) : (
            places.map((elem, ind) => (
              <Box key={ind} id="place_main">
                <Box className="card_container">
                  <Box className="card-image" as="img" src={elem.images}></Box>
                  <Box className="card-overlay">
                    <h3 className="card-title" style={{ fontWeight: '700', color: ' #037dab' }}>
                      {elem.StateName}
                    </h3>
                    <p className="card-description">Know more about this place</p>
                    <Link to={`#`}>
                      {' '}
                      <Button backgroundColor={'#037dab'} color={'white'} mt="10px" size="sm">
                        Know more
                      </Button>
                    </Link>
                  </Box>
                </Box>

                <Box id="place_right">
                  <Heading size={'lg'} color={'gray.700'} id="place_name">
                    {elem.placeName}
                  </Heading>
                  <Text color={'gray.600'}>{elem.desc}</Text>
                  <Button size={'sm'} backgroundColor=" #037dab" color="white" variant="outline" mt={'20px'} as={Link} to={'#'}>
                    Read more
                  </Button>
                </Box>
              </Box>
            ))
          )}
        </Box>

        <Box id="hotel_container">
          <Heading id="hotel_name" size={'md'}>
            Hotels
          </Heading>
          {loading ? (
            // Render skeletons for hotels while loading
            Array.from({ length: 4 }, (_, ind) => (
              <Box key={ind} p={'5px 5px 0px 5px'} margin={'auto'} id="hotelCard" maxW="sm" w={'90%'} borderWidth="1px" borderRadius="lg">
                <Skeleton height="150px" />
              </Box>
            ))
          ) : (
            hotel && hotel.length > 0 && hotel.map((elem, ind) => {
              return (
                <Box
                  key={ind}
                  p={'5px 5px 0px 5px'}
                  margin={'auto'}
                  id="hotelCard"
                  maxW="sm"
                  w={'90%'}
                  borderWidth="1px"
                  borderRadius="lg"
                >
                  <Image margin="auto" w="100%" h="100%" src={elem.Image} alt="img" />
                  <Box p="6" textAlign="start">
                    <Box display="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" backgroundColor="teal" color={'white'}>
                        New
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        2 beds &bull; 3 baths
                      </Box>
                    </Box>

                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
                      {elem.HotelName}
                    </Box>

                    <Flex alignItems="center" justifyContent="space-between">
                      <strong>${elem.PriceRange}</strong>
                      <Box as="span" color="gray.600" fontSize="sm">
                        <s id="s">${elem.Mrp}</s>
                      </Box>
                      <p style={{ color: 'green', fontWeight: '700' }}>
                        <strong>{elem.Discount} </strong>Off
                      </p>
                    </Flex>

                    <Box display="flex" mt="2" alignItems="center">
                      {Array(5)
                        .fill('')
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            color={i < elem.Rating ? ' #037dab' : 'gray.300'}
                          />
                        ))}
                      <Box as="span" ml="2" color="gray.500" fontSize="sm">
                        {elem.Review} reviews
                      </Box>
                    </Box>
                    <Button
                      w="100%"
                      backgroundColor="#037dab"
                      color={'white'}
                      size="sm"
                      mt="10px"
                      onClick={() => handleBook(elem)}
                    >
                      Book
                    </Button>
                  </Box>
                </Box>
              );
            })
          )}
        </Box>
      </Box>

      <BookCard img="https://img.freepik.com/premium-vector/happy-young-couple-traveling-with-suitcase-bags-isolated-cartoon-characters-vector-man-woman_316839-762.jpg?w=360" />
      <Review />
      <Footer />
    </Box>
  );
};
