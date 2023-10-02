import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const SectionFive = () => {
    return (
        <Box id="section_five">
            <Heading mb="20px">About <span>Us</span> </Heading>
            <Box id="about_box">
                <Box id="about_left">
                    <Image borderRadius={"10px"} src="https://webunwto.s3.eu-west-1.amazonaws.com/2020-10/statistics-day-page.jpg" />
                </Box>
                <Box id="about_right">
                    <Heading >How Travel <span> Agency Work</span></Heading>
                    <Text mt={'10px'}>A travel agency serves as your personal gateway
                        to the world, providing expert guidance and tailored itineraries to turn
                        your travel dreams into reality.Travel agencies are your one-stop shop for all things travel;
                        they handle everything from flights and accommodations to tours and activities, ensuring a
                        hassle-free experience</Text>
                    <Button mt={'15px'} size={'md'} color={'white'} backgroundColor=' #037dab' variant='outline'> Read more</Button>
                </Box>
            </Box>
        </Box>
    )
}
