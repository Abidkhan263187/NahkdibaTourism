import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

export const Events_news = [
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

export const Events_News = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);
  return (
    <Box>

      <Heading mt={"60px"}>News And <span style={{ color: "orange" }}> Events</span></Heading>
      <Box id="events_news_main">

        {Events_news.map((elem, ind) => {
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
  )
}
