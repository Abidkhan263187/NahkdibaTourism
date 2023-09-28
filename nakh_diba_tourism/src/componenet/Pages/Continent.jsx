import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Image, Link, Text } from '@chakra-ui/react'
import './style.css';
import { Nav } from './Nav'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'
import { BookCard } from './BookCard';
import { Events_News } from './Events_News';
import { Review } from './Review';



export const Continent = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://e1.pxfuel.com/desktop-wallpaper/780/239/desktop-wallpaper-tajmahal-new-full-new.jpg",
    "https://wallpapercave.com/wp/wp3067499.jpg",
    "https://a-static.besthdwallpaper.com/evening-atmosphere-at-great-wall-of-china-wallpaper-3440x1440-1841_15.jpg",
    "https://img3.wallspic.com/crops/9/2/9/8/2/128929/128929-water-body_of_water-water_resources-watercourse-nature-3840x2160.jpg",
    "https://images2.alphacoders.com/528/528327.jpg",
    "https://images7.alphacoders.com/110/thumb-1920-1108495.png"
  ];
  const continents = [
    {
      name: "Asia",
      imageSrc: "https://e1.pxfuel.com/desktop-wallpaper/619/216/desktop-wallpaper-tajmahal-taj-mahal-computer.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Australia",
      imageSrc: "https://c4.wallpaperflare.com/wallpaper/396/433/109/city-sydney-sydney-opera-house-photography-wallpaper-preview.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Europe",
      imageSrc: "https://www.planetware.com/wpimages/2020/11/europe-top-attractions-colosseum-rome.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Africa",
      imageSrc: "https://www.zicasso.com/static/1888a603dfc15fd3a7b886f7967f0826/304cc/1888a603dfc15fd3a7b886f7967f0826.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];



  const prevSlide = () => { setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1)); };
  const nextSlide = () => { setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1)); };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => { clearInterval(interval); };
  }, [currentSlide]);

  const handleContinent = (continent) => {
    navigate(`/continent/${continent}`)
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return (
    <Box>
      <Nav />
      <div className="carousel-container">
        <div className="carousel">
          <div className='carousel-item'> <img src={images[currentSlide]} alt={`Image`} /></div>
        </div>
        <button colorScheme='blue' className="carousel-button prev" onClick={prevSlide}> &#10094;</button>
        <button colorScheme='blue' className="carousel-button next" onClick={nextSlide}> &#10095; </button>
      </div>
      <Box id="continent_card_container" >
        <Heading mt={'20px'}> Select <span style={{ color: "orange" }}>Continents</span> </Heading>
        <div className="container">
          {continents.map((continent, index) => (
            <div className="card" key={index}>
              <div className="face face1">
                <div className="content">
                  <Heading id="continent_name">{continent.name}</Heading>
                  <Image borderRadius={"10px"} src={continent.imageSrc} alt="" />
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <Heading id="continent_name">{continent.name}</Heading>
                  <p>{continent.description}</p>
                  <Button colorScheme='blue' onClick={() => handleContinent(continent.name)}>Explore Continent</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>
     <Events_News/>

      <Review/>

      <BookCard img="https://img.freepik.com/premium-photo/travel-tourism-suitcase-landmarks_744409-16.jpg" />
      <Footer />
    </Box>
  );
};
