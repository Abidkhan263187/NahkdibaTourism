import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, Image, Link, Text } from '@chakra-ui/react'
import './style.css';
import { Nav } from './Nav'
import { Footer } from './Footer'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { continentInfo } from '../Redux/action';

export const Continent = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate()
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
      name: "Russia",
      imageSrc: "https://i.natgeofe.com/k/415419c5-3768-4c8f-8697-f90de7a6075b/russia-st-basils.jpg?w=1084.125&h=609",
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

  const Events_News = [
    {
      image: "https://www.planetware.com/wpimages/2019/09/india-amritsar-top-attractions-golden-temple.jpg",
      info: "Golden Temple 1977",
      headline: "Attack my goverment  duing the time  of the emergency",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam facere ratione."
    },
    {
      image: "https://images.news18.com/ibnlive/uploads/2021/10/hawaii.jpg",
      info: "Hawai Warthquake",
      headline: "Attacked my Earthquake  duing the  summer event",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam facere ratione."
    },
    {
      image: "https://www.tourmyindia.com/blog/wp-content/uploads/2021/03/Best-Places-to-Visit-in-Kerala.jpg",
      info: "Africa Zambia ",
      headline: "New ride starting this summer ",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam facere ratione."
    },
    {
      image: "https://media.timeout.com/images/105761603/750/422/image.jpg",
      info: "Italy",
      headline: "Country is open to travel Around the world!",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam facere ratione."
    },
    {
      image: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/09/aquaventure-parmk-Copy.jpg",
      info: "Dubai ",
      headline: "Now you can enjoy summers and trips with your family ",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam facere ratione."
    },
    {
      image: "https://www.planetware.com/wpimages/2022/02/japan-top-attractions-naritasan-shinsho-ji.jpg",
      info: "Japan 2023",
      headline: "Japan is givig free tourist visa for tourism huraay!",
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam facere ratione."
    }
  ]



  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const handleContinent=(continent)=>{

    dispatch(continentInfo(continent));
    navigate('/country')
  }

  return (
    <Box>
      <Nav />
      <div className="carousel-container">
        <div className="carousel">

          <div className='carousel-item'>
            <img src={images[currentSlide]} alt={`Image`} />
          </div>
        </div>
        <button colorScheme='blue' className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button colorScheme='blue' className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <Box id="continent_card_container" m={'40px'}>
        <Heading> Select <span style={{ color: "orange" }}>Continents</span> </Heading>
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
                  <Button colorScheme='blue'  onClick={()=>handleContinent(continent.name)}>Explore Continent</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Box>
      <Heading>News And <span style={{color:"orange"}}> Events</span></Heading>
      <Box id="events_news_main">
       
       {Events_News.map((elem,ind)=>{
        return(
          <Box id="Event_news_container">
            <Box id="news_event_img_div">
              <Image src={elem.image}/>
            </Box>
            <Box id="new_details">
              <Text fontWeight={'700'} color={'orange'} fontSize={'lg'}>{elem.info}</Text>
              <strong>{elem.headline}</strong>
              <Text  color={'gray'} >{elem.details}</Text>
            </Box>
          </Box>
        )
       })}
      </Box>
      <Footer />
    </Box>
  );
};
