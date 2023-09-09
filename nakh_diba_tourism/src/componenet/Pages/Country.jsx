import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Box, Button, Heading, Image } from '@chakra-ui/react'
import { countryInfo } from '../Redux/action'
import './style.css'
import { Nav } from './Nav'



export const Country = () => {
  const [imgArr,setImgArr]=useState([])
  const [searchParams,setSearchParams]=useSearchParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countryArr, setCountryArr] = useState([])

  const {region}=useParams()
  const { continent } = useSelector((store) => {
    return store;
  })



  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${region}`).then(({ data }) => {
          let countriesarr = data.data[0].countries
          setCountryArr(countriesarr)
          // console.log(countriesarr)
          // console.log(countriesarr.CountryName)
        })
      } catch (error) {
        console.log(error, "eroor while getting country")
      }
    })()
  }, [])
   useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://tired-cormorant.cyclic.app/tourism?Continent=${region}`).then(({ data }) => {
          let images = data.data[0].images
          setImgArr(images)
          console.log(images)
          // console.log(countriesarr.CountryName)
        })
      } catch (error) {
        console.log(error, "eroor while getting country")
      }
    })()
  }, [])
 

  const handleCountry = (country) => {

    // dispatch(countryInfo(country));
    navigate(`/${region}/${country}`)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? imgArr.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === imgArr.length - 1 ? 0 : prevSlide + 1));
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
            <img src={imgArr[currentSlide]} alt={`Image`} />
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
