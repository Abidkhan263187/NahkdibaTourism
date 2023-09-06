import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Image, Link } from '@chakra-ui/react'
import './style.css';
import { Nav } from './Nav'
import { Footer } from './Footer'
export const Continent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://e1.pxfuel.com/desktop-wallpaper/780/239/desktop-wallpaper-tajmahal-new-full-new.jpg",
    "https://wallpapercave.com/wp/wp3067499.jpg",
    "https://a-static.besthdwallpaper.com/evening-atmosphere-at-great-wall-of-china-wallpaper-3440x1440-1841_15.jpg",
    "https://img3.wallspic.com/crops/9/2/9/8/2/128929/128929-water-body_of_water-water_resources-watercourse-nature-3840x2160.jpg",
    "https://images2.alphacoders.com/528/528327.jpg",
    "https://images7.alphacoders.com/110/thumb-1920-1108495.png"
  ];

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
    };
  }, [currentSlide]);

  return (
    <Box>
      <Nav />
      <div className="carousel-container">
        <div className="carousel">

          <div className='carousel-item'>
            <img src={images[currentSlide]} alt={`Image`} />
          </div>
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <Box id="continent_card_container" m={'40px'}>
        <Heading> Select <span style={{color:"orange"}}>Continents</span> </Heading>
        <div class="container">


          <div class="card">
            <div class="face face1">
              <div class="content">
                <Heading id="continent_name">Asia</Heading>
                <Image borderRadius={"10px"} src="https://e1.pxfuel.com/desktop-wallpaper/619/216/desktop-wallpaper-tajmahal-taj-mahal-computer.jpg" alt="" />

              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <Heading id="continent_name">Asia</Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button as={Link} to="#">Read More</Button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <Heading id="continent_name">Russia</Heading>
                <Image src="https://i.natgeofe.com/k/415419c5-3768-4c8f-8697-f90de7a6075b/russia-st-basils.jpg?w=1084.125&h=609" alt="" />

              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <Heading id="continent_name">Russia</Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button as={Link} to="#">Read More</Button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <Heading id="continent_name">Europe</Heading>
                <Image src="https://www.planetware.com/wpimages/2020/11/europe-top-attractions-colosseum-rome.jpg" alt="" />

              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <Heading id="continent_name">Europe</Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button as={Link} to="#">Read More</Button>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <Heading id="continent_name">Africa</Heading>
                <Image src="https://www.zicasso.com/static/1888a603dfc15fd3a7b886f7967f0826/304cc/1888a603dfc15fd3a7b886f7967f0826.jpg" alt="" />

              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <Heading id="continent_name">Africa</Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Button as={Link} to="#">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Footer />
    </Box>
  );
};
