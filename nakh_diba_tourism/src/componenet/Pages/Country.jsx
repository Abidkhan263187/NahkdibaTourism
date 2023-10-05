import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from '@chakra-ui/react';
import './style.css';
import { Nav } from './Nav';
import 'react-multi-carousel/lib/styles.css';
import { Footer } from './Footer';
import { BookCard } from './BookCard';
import { Review } from './Review';

export const Country = () => {
  const [imgArr, setImgArr] = useState([]);
  const [load, setLoad] = useState(true);
  const [galArr, setGalArr] = useState([]);
  const [countryArr, setCountryArr] = useState([]);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const { region } = useParams();

  useEffect(() => {
    (async () => {
      try {
        await axios
          .get(`${process.env.REACT_APP_URL}/tourism?Continent=${region}`)
          .then(({ data }) => {
            let images = data.data[0].images;
            let gallery = data.data[0].gallery;
            let countriesarr = data.data[0].countries;
            setCountryArr(countriesarr);
            setGalArr(gallery);
            setImgArr(images);
            setLoad(false);
          });
      } catch (error) {
        console.log(error, "error while getting arrays");
      }
    })();
  }, []);

  const handleCountry = (country) => {
    navigate(`/${region}/${country}`);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imgArr.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imgArr.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return (
    <div>
      <Nav />
      {!load ? (
        <div class="carousel-container">
          <div class="carousel">
            <div class="carousel-item">
              <img src={imgArr[currentSlide]} alt={`Image`} />
            </div>
          </div>
          <button
            colorScheme="blue"
            class="carousel-button prev"
            onClick={prevSlide}
          >
            {' '}
            &#10094;{' '}
          </button>
          <button
            colorScheme="blue"
            class="carousel-button next"
            onClick={nextSlide}
          >
            {' '}
            &#10095;{' '}
          </button>
        </div>
      ) : (
        <Stack>
          <Skeleton height="400px" />
        </Stack>
      )}

      <Box id="country_main" mt="30px">
        <Heading
          w={['', '', '100%', '95%']}
          m="auto"
          borderRadius="5px"
          backgroundColor="#037dab"
          color={'white'}
        >
          {region}
        </Heading>
        <Box id="country_Container">
          {countryArr && countryArr.length > 0 ? (
            countryArr.map((elem, ind) => {
              return (
                <Box id="country_card_parent" key={ind}>
                  <Box overflow="hidden" h="80%">
                    <Box
                      as="img"
                      className="country_img"
                      onClick={() => handleCountry(elem.CountryName)}
                      src={elem.countryImage}
                    ></Box>
                  </Box>
                  <Box p="10px 0px">
                    {' '}
                    <Heading size={['', 'sm', 'sm', 'md']}>
                      {elem.CountryName}
                    </Heading>
                  </Box>
                </Box>
              );
            })
          ) : (
            // Render skeletons for countries while loading
            Array.from({ length: 4 }, (_, ind) => (
              <Skeleton key={ind} height="200px" />
            ))
          )}
        </Box>
      </Box>

      <Box mt="30px">
        <Heading
          w="95%"
          m="auto"
          borderRadius="5px"
          backgroundColor=" #037dab"
          color={'white'}
        >
          Gallery
        </Heading>
        <Box id="gallery_container">
          {galArr && galArr.length > 0 ? (
            galArr.map((elem, ind) => {
              return (
                <Box key={ind} className="card_container_galarry">
                  <Box className="card-image" as="img" src={elem}></Box>
                  <Box className="card-overlay">
                    <h3 className="card-title" style={{ fontWeight: '700' }}>
                      {elem.StateName}
                    </h3>
                    <p className="card-description">
                      Explore the state's famous places
                    </p>
                    <Link to={'#'}>
                      {' '}
                      <Button bgColor={'#037dab'} color={'white'} mt="10px" size="sm">
                        See places
                      </Button>
                    </Link>
                  </Box>
                </Box>
              );
            })
          ) : (
            // Render skeletons for gallery while loading
            Array.from({ length: 6 }, (_, ind) => (
              <Box className="card_container_galarry" key={ind}>
                <Skeleton height="100%" />
              </Box>
            ))
          )}
        </Box>
      </Box>

      <Review />

      <BookCard img="https://img.freepik.com/premium-photo/vector-tourist-couples-with-travel-bags-illustration_575980-4178.jpg?w=2000" />
      <Footer />
    </div>
  );
};
