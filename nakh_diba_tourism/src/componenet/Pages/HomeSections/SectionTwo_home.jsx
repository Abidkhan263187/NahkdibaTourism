import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import './section.css'


const Services = ({ icon, serviceName, text }) => {
    return (
        <Box id='service_card'>
            <Box id="service_font"><i className={icon}></i></Box>
            <Heading size={'md'}  color={'gray.600'}>{serviceName}</Heading>
            <Text>{text}
            </Text>
        </Box>
    )
}

export const SectionTwo_home = () => {
    return (
        <Box >
            <Heading mt={'20px'}> Services </Heading>
            <Grid  id="section_two_container" >


            <Services icon="fa-solid fa-hotel fa-2xl" serviceName="Arrodable Hotels"
                text="Elevate your travel experience with our top-notch hotel service, where comfort and luxury meet to create unforgettable memories" />
            <Services icon="fa-solid fa-utensils fa-2xl" serviceName="Good Food"
                text="Let our expert guides lead the way, offering valuable insights and local knowledge to make your travels truly immersive and enlightening" />
            <Services icon="fa-solid fa-route fa-2xl" serviceName="Guide"
                text="Embark on a rugged adventure and find your perfect camping spot with our app, ensuring a memorable outdoor experience under the stars" />
            <Services icon="fa-solid fa-tent  fa-2xl" serviceName="Camping"
                text="Explore the great outdoors with our camping guide, providing essential tips and recommendations for a memorable and safe camping experience" />
            <Services icon="fa-solid fa-truck-monster fa-2xl" serviceName="Off Road"
                text="Get off the beaten path and into adventure mode with our off-road exploration guide, designed to help you conquer rugged terrain and discover new horizons" />
            <Services icon="fa-solid fa-mountain fa-2xl" serviceName="Adventure"
                text="Seek adrenaline-fueled excitement with our adventure app, where daring experiences await at every turn, from mountain summits to deep-sea dives" />



        </Grid>
        </Box>
    )
}
