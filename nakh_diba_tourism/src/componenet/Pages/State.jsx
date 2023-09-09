import React from 'react'
import './style.css'
import { useEffect, useState } from 'react'
import { useSelector, } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { Box, Button, Heading } from '@chakra-ui/react'


export const State = () => {
  const images = [
    "https://www.kiwi.com/stories/wp-content/uploads/2018/08/shutterstock_715816141-1920x700.jpg",
    "https://media.easemytrip.com/media/Blog/International/637007769287754861/637007769287754861PbwuEm.jpg",
    "https://c.myholidays.com/blog/blog/content/images/2020/10/Top-Places-To-Visit-In-Saudi-Arabia-For-An-Exciting-Vacation.jpg",
    "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/05/Best-Time-to-Visit-Andaman-and-Nicobar.jpg?resize=1200%2C855&ssl=1",
    "https://adm.dookinternational.com/dook/images/country/z9MQ4CJM1649160119.jpg",
    "https://images7.alphacoders.com/110/thumb-1920-1108495.png"
  ];
  const { country, region } = useParams()
  const [statesArr, setStatesArr] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0);


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
    <Box>

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
      <Box border={"1px solid green"}>
        <Heading>{country}</Heading>
        <Box id="state_container">
        {statesArr.length > 0 && statesArr && statesArr.map((elem, ind) => {
          return (
            <Box  className="card_container" border={'1px solid'} >
              <Box className="card-image" as='img' src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg"></Box>
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
     
    </Box>
  )
}
