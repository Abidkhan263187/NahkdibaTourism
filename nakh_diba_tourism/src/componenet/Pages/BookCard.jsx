import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const BookCard = ({img}) => {
  return (
    <Box>
        {/* <Nav/> */}
        <Box id="book_container_main">
      <Heading>Book <span style={{ color: "orange" }}>Now !</span></Heading>
      <Box id="book_container">
        <Box id="book_container_left">
          <Image src={img} />
        </Box>
        <Box id='book_container_right'>
          <Heading  size={["sm","lg"]} m={["10px","0px"]}>Discover your next adventure! Book your dream trip today.</Heading>
          <Text>Embark on a grand odyssey. Book a trip that will leave a lasting legacy.
            Ignite your wanderlust and seize the world!
            Secure your epic journey, and experience the majesty of our planet like never before
          </Text>
          <Button as={Link} to="/book">Book</Button>
        </Box>
      </Box>
    </Box>
    {/* <Footer/> */}
    </Box>
  )
}
