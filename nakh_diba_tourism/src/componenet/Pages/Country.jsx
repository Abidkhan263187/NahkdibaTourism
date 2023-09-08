import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Box, Button, Heading, Image } from '@chakra-ui/react'
import { countryInfo } from '../Redux/action'
import './style.css'
import { Nav } from './Nav'

const images = [
  "https://www.kiwi.com/stories/wp-content/uploads/2018/08/shutterstock_715816141-1920x700.jpg",
  "https://media.easemytrip.com/media/Blog/International/637007769287754861/637007769287754861PbwuEm.jpg",
  "https://c.myholidays.com/blog/blog/content/images/2020/10/Top-Places-To-Visit-In-Saudi-Arabia-For-An-Exciting-Vacation.jpg",
  "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/05/Best-Time-to-Visit-Andaman-and-Nicobar.jpg?resize=1200%2C855&ssl=1",
  "https://adm.dookinternational.com/dook/images/country/z9MQ4CJM1649160119.jpg",
  "https://images7.alphacoders.com/110/thumb-1920-1108495.png"
];

export const Country = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countryArr, setCountryArr] = useState([])

  const { continent } = useSelector((store) => {
    return store;
  })


  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${continent}`).then(({ data }) => {
          let countriesarr = data.data[0].countries
          setCountryArr(countriesarr)
          console.log(countriesarr)
          // console.log(countriesarr.CountryName)
        })
      } catch (error) {
        console.log(error, "eroor while getting country")
      }
    })()
  }, [])

  const handleCountry = (country) => {

    dispatch(countryInfo(country));
    navigate('/state')
  }

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


  return (
    <div>
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
      <Box id="country_main" border={"1px solid red"}>
        <Heading>{continent}</Heading>
        <Box id="country_Container">
          {countryArr && countryArr.length > 0 && countryArr.map((elem, ind) => {
            return (
              <Box border={"1px solid"} key={ind}>
                <Box>
                  <Image onClick={() => handleCountry(elem.CountryName)} src='https://www.planetware.com/wpimages/2020/11/europe-top-attractions-colosseum-rome.jpg' />
                </Box>
                <Heading size={'lg'}>{elem.CountryName}</Heading>
              </Box>
            )
          })}
        </Box>
      </Box>

    </div>
  )
}
