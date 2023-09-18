import { StarIcon } from '@chakra-ui/icons';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-multi-carousel'

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
  
   const ReviewCard = () => {
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
export const Review = () => {
  return (
    <div>
         <Box>
        <Heading mb={"30px"}>Reviews</Heading>
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
    </div>
  )
}
