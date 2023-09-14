import React from 'react'
import './style.css'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import { Nav } from './Nav'
import { Footer } from './Footer'

const Events_News = [
  {
    image: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/984988/Big-Ben-916x514-916x514-1-916x514.jpg",
    info: "England sept 2023",
    headline: "Tourism offers given my British government authority",
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

export const Slider=()=>{
  const images = [
    "https://www.kiwi.com/stories/wp-content/uploads/2018/08/shutterstock_715816141-1920x700.jpg",
    "https://media.easemytrip.com/media/Blog/International/637007769287754861/637007769287754861PbwuEm.jpg",
    "https://c.myholidays.com/blog/blog/content/images/2020/10/Top-Places-To-Visit-In-Saudi-Arabia-For-An-Exciting-Vacation.jpg",
    "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/05/Best-Time-to-Visit-Andaman-and-Nicobar.jpg?resize=1200%2C855&ssl=1",
    "https://adm.dookinternational.com/dook/images/country/z9MQ4CJM1649160119.jpg",
    "https://images7.alphacoders.com/110/thumb-1920-1108495.png"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => { setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1)); };
  const nextSlide = () => { setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1)); };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => { clearInterval(interval); };
  }, [currentSlide]);

  return(
    <div className="carousel-container">
        <div className="carousel">
          <div className='carousel-item'><img src={images[currentSlide]} alt={`Image`} /></div>
        </div>
        <button colorScheme='blue' className="carousel-button prev" onClick={prevSlide}> &#10094;</button>
        <button colorScheme='blue' className="carousel-button next" onClick={nextSlide}>&#10095; </button>
      </div>
  )
}
export const State = () => {
 
  const { country, region } = useParams()
  const [statesArr, setStatesArr] = useState([])
  const [galArr, setGalArr] = useState([])



  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${region}&CountryName=${country}`).
          then(({ data }) => {
            const states = data.data[0].countries[0].states
            setStatesArr(states)
            // console.log(states)
          })
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])


  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${region}`).then(({ data }) => {
          let gallery = data.data[0].gallery
          setGalArr(gallery)
        })
      } catch (error) {
        console.log(error, "eroor while getting arrays")
      }
    })()
  }, [])

 

  return (
    <Box>
      <Nav />
      <Slider/>
      <Box border={"1px solid green"} mt={'20px'}>
        <Heading>{country}</Heading>
        <Box id="state_container">
          {statesArr.length > 0 && statesArr && statesArr.map((elem, ind) => {
            return (
              <Box className="card_container"  >
                <Box className="card-image" as='img' src={elem.stateImage}></Box>
                <Box className="card-overlay">
                  <h3 className="card-title" style={{ fontWeight: "700" ,color:"orange"}}>{elem.StateName}</h3>
                  <p className="card-description">Explore the  famous places</p>
                  <Link to={`/${region}/${country}/${elem.StateName}`}> <Button colorScheme={'orange'} color={'white'} mt="10px" size="sm">See places</Button></Link>
                </Box>
              </Box>
            )})}
        </Box>
      </Box>
      <Box>
      <Box>
      <Heading>News And <span style={{ color: "orange" }}> Events</span></Heading>
      <Box id="events_news_main">

        {Events_News.map((elem, ind) => {
          return (
            <Box id="Event_news_container">
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
        <Heading>Most <span style={{color:"orange"}}>Visited Places</span> </Heading>
        <Box id="gallery_container">
          {galArr && galArr.length > 0 && galArr.map((elem, ind) => {
            return (
              <Box key={ind} className="card_container_galarry"  >
                <Box className="card-image" as='img' src={elem}></Box>
                <Box className="card-overlay">
                  <h3 className="card-title" style={{ fontWeight: "700" }}>{elem.StateName}</h3>
                  <p className="card-description">Explore the most visited  famous places</p>
                  <Link to={'#'}> <Button colorScheme='orange' color={'white'} mt="10px" size="sm">Know more </Button></Link>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>



      <Box id="book_container_main">
        <Heading>Book <span style={{ color: "orange" }}>Now !</span></Heading>
        <Box id="book_container">
          <Box id="book_container_left">
            <Image src="https://www.transparentpng.com/thumb/travel/RALK0S-travel-suitcase-airplane-photo-tour-clipart-photo.png" />
          </Box>
          <Box id='book_container_right'>
            <Heading size="lg">Discover your next adventure! Book your dream trip today.</Heading>
            <Text>Embark on a grand odyssey. Book a trip that will leave a lasting legacy.
              Ignite your wanderlust and seize the world!
              Secure your epic journey, and experience the majesty of our planet like never before
            </Text>
            <Button as={Link} to="/book">Book</Button>
          </Box>
        </Box>
      </Box>

     
      <Footer />

    </Box>
  )
}
