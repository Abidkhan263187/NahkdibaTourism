import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Heading, Image, Text, Skeleton } from '@chakra-ui/react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { BookCard } from './BookCard';

const Events_News = [
  // ...your event data...
];

export const State = () => {
  const { country, region } = useParams();
  const [statesArr, setStatesArr] = useState([]);
  const [galArr, setGalArr] = useState([]);
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${region}&CountryName=${country}`);
        const states = response.data.data[0].countries[0].states;
        const countryGif = response.data.data[0].countries[0].countryGif;
        setGif(countryGif);
        setStatesArr(states);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${region}`);
        const gallery = response.data.data[0].gallery;
        setGalArr(gallery);
      } catch (error) {
        console.log(error, "error while getting arrays");
      }
    })();
  }, []);

  return (
    <Box>
      <Nav />
      <Box>
        {loading ? (
          <Skeleton height="200px" />
        ) : (
          <Image id="slider_gif" src={gif} />
        )}
      </Box>
      <Box mt={'20px'}>
        {loading ? (
          <Skeleton height="40px" width="80%" my="10px" mx="auto" />
        ) : (
          <Heading w={'95%'} m={'auto'} borderRadius={'5px'} backgroundColor={"orange"}>{country}</Heading>
        )}
        <Box id="state_container">
          {loading ? (
            // Render skeletons for states while loading
            Array.from({ length: 4 }, (_, ind) => (
              <Skeleton key={ind} height="200px" />
            ))
          ) : (
            statesArr.length > 0 && statesArr.map((elem, ind) => {
              return (
                <Box className="card_container" key={ind}>
                  <Box className="card-image" as='img' src={elem.stateImage}></Box>
                  <Box className="card-overlay">
                    <h3 className="card-title" style={{ fontWeight: "700", color: "orange" }}>{elem.StateName}</h3>
                    <p className="card-description">Explore the  famous places</p>
                    <Link to={`/${region}/${country}/${elem.StateName}`}> <Button colorScheme={'orange'} color={'white'} mt="10px" size="sm">See places</Button></Link>
                  </Box>
                </Box>
              )
            })
          )}
        </Box>
      </Box>
      <Box>
        <Box>
          <Heading >News And <span style={{ color: "orange" }}> Events</span></Heading>
          <Box id="events_news_main">
            {Events_News.map((elem, ind) => {
              return (
                <Box id="Event_news_container" key={ind}>
                  <Box id="news_event_img_div">
                    <Image src={elem.image} />
                  </Box>
                  <Box id="new_details">
                    <Text fontWeight={'700'} color={'orange'} fontSize={'lg'}>{elem.info}</Text>
                    <strong>{elem.headline}</strong>
                    <Text color={'gray'} >{elem.details}</Text>
                  </Box>
                </Box>
              )
            })}
          </Box>
        </Box>
        <Heading>Most <span style={{ color: "orange" }}>Visited Places</span> </Heading>
        <Box id="gallery_container">
          {loading ? (
            // Render skeletons for gallery while loading
            Array.from({ length: 6 }, (_, ind) => (
              <Skeleton key={ind} height="200px" />
            ))
          ) : (
            galArr && galArr.length > 0 && galArr.map((elem, ind) => {
              return (
                <Box key={ind} className="card_container_galarry">
                  <Box className="card-image" as='img' src={elem}></Box>
                  <Box className="card-overlay">
                    <h3 className="card-title" style={{ fontWeight: "700" }}>{elem.StateName}</h3>
                    <p className="card-description">Explore the most visited  famous places</p>
                    <Link to={'#'}> <Button colorScheme='orange' color={'white'} mt="10px" size="sm">Know more</Button></Link>
                  </Box>
                </Box>
              )
            })
          )}
        </Box>
      </Box>

      <BookCard img="https://www.transparentpng.com/thumb/travel/RALK0S-travel-suitcase-airplane-photo-tour-clipart-photo.png" />

      <Footer />
    </Box>
  )
}
