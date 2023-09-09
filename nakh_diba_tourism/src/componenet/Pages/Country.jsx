import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import './style.css'
import { Nav } from './Nav'
import { StarIcon } from '@chakra-ui/icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Footer } from './Footer'

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
export const ReviewCard = () => {
  return (
    <Box id="reviews_card" >
      <Box id="review_card_left">
        <Image src='https://avatars.githubusercontent.com/u/115173026?v=4' />
      </Box>
      <Box id="review_card_right">
        <Heading size={'lg'}>Abid khan</Heading>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Iusto, fuga culpa. Provident corrupti voluptatem sint.
        </Text>
        <Text>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < 4 ? 'orange' : 'gray.300'}
              />
            ))}
        </Text>
      </Box>
    </Box>
  )
}

export const Country = () => {
  const [imgArr, setImgArr] = useState([])
  const [galArr, setGalArr] = useState([])
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countryArr, setCountryArr] = useState([])

  const { region } = useParams()


  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${region}`).then(({ data }) => {
          let images = data.data[0].images
          let gallery = data.data[0].gallery
          let countriesarr = data.data[0].countries
          setCountryArr(countriesarr)
          setGalArr(gallery)
          setImgArr(images)
        })
      } catch (error) {
        console.log(error, "eroor while getting arrays")
      }
    })()
  }, [])


  const handleCountry = (country) => { navigate(`/${region}/${country}`) }
  const prevSlide = () => { setCurrentSlide((prevSlide) => (prevSlide === 0 ? imgArr.length - 1 : prevSlide - 1)); };
  const nextSlide = () => { setCurrentSlide((prevSlide) => (prevSlide === imgArr.length - 1 ? 0 : prevSlide + 1)); };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);


  return (
    <div>
      <Nav />
      <div class="carousel-container">
        <div class="carousel">
          <div class='carousel-item'>
            <img src={imgArr[currentSlide]} alt={`Image`} />
          </div>
        </div>
        <button colorScheme='blue' class="carousel-button prev" onClick={prevSlide}> &#10094; </button>
        <button colorScheme='blue' class="carousel-button next" onClick={nextSlide}> &#10095; </button>
      </div>
      <Box id="country_main" border={"1px solid red"}>
        <Heading>{region}</Heading>
        <Box id="country_Container">
          {countryArr && countryArr.length > 0 && countryArr.map((elem, ind) => {
            return (
              <Box id="country_card_parent" key={ind}>
                <Box overflow={'hidden'} h={'80%'} >
                  <Box as={'img'} className='country_img' onClick={() => handleCountry(elem.CountryName)} src={elem.countryImage} ></Box>
                </Box>
                <Box p={"10px 0px"}> <Heading size={'md'}>{elem.CountryName}</Heading></Box>
              </Box>
            )
          })}
        </Box>
      </Box>

      <Box>
        <Heading>Gallery</Heading>
        <Box id="gallery_container">
          {galArr && galArr.length > 0 && galArr.map((elem, ind) => {
            return (
              <Box key={ind} className="card_container_galarry"  >
                <Box className="card-image" as='img' src={elem}></Box>
                <Box className="card-overlay">
                  <h3 className="card-title" style={{ fontWeight: "700" }}>{elem.StateName}</h3>
                  <p className="card-description">"Explore the states famous places</p>
                  <Link to={'#'}> <Button bgColor={'#068181'} color={'white'} mt="10px" size="sm">See places</Button></Link>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>


      <Box>
        <Heading>Reviews</Heading>
        <Box id="review_container">
          <Carousel responsive={responsive}
            swipeable={true}
            showDots={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Carousel>
        </Box>
      </Box>

      <Box id="book_container_main">
      <Heading>Book <span style={{color:"orange"}}>Now !</span></Heading>
        <Box id="book_container">
          <Box id="book_container_left">
            <Image src="https://img.freepik.com/premium-photo/vector-tourist-couples-with-travel-bags-illustration_575980-4178.jpg?w=2000" />
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
    </div>
  )
}
