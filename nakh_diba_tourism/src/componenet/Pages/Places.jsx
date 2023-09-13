import { Box, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const images = [
  {
    original: 'https://images.mid-day.com/images/images/2023/aug/redfortpti_d.jpg?tr=w-480,h-270',
    thumbnail: 'https://images.mid-day.com/images/images/2023/aug/redfortpti_d.jpg?tr=w-480,h-270',
  
  },
  {
    original: 'https://images.mid-day.com/images/images/2021/jul/redfort-j_d.jpg?tr=w-480,h-270',
    thumbnail: 'https://images.mid-day.com/images/images/2021/jul/redfort-j_d.jpg?tr=w-480,h-270',
  },
  {
    original: 'https://www.shutterstock.com/shutterstock/videos/1103002029/thumb/1.jpg?ip=x480',
    thumbnail: 'https://www.shutterstock.com/shutterstock/videos/1103002029/thumb/1.jpg?ip=x480',
  },
  {
    original: 'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/hero_banner/Agra_Fort.jpg',
    thumbnail: 'https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/hero_banner/Agra_Fort.jpg',
  },
];
export const Places = () => {
  const { state, country, region } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://tired-cormorant.cyclic.app/tourism?Continent=${region}&CountryName=${country}&StateName=${state}`
        );
        const place = response.data.data[0].state[0][0].places;
        setPlaces(place);
        console.log(place);
      } catch (error) {
        console.log(error, 'error while fetching state data');
      }
    })();
  }, []);
  // const customStyles = {
  //   gallery: {
  //     maxHeight: '400px', // Set the maximum height of the gallery container
  //   },
  //   galleryImage: {
  //     objectFit: 'cover', // Ensure images fit within the container
  //     Height: '10%',     // Fix the height of the images
  //     Width: '100%',      // Fix the width of the images
  //   },
  // };
  return (
    <div>
      {state}
      {places && places.length > 0 && (
        <Box padding={"30px"}>
          {places.map((elem, ind) => (
            <Box key={ind} id="place_main"  border={'1px solid'} padding="20px">
              <Box id="place_left" border={'1px solid'} w={'30%'}  >
                <ImageGallery 
                items={images} 
                // styles={customStyles}
            
                />
              </Box>
              <Box id="place_right">
                <Heading>{elem.placeName}</Heading>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};
