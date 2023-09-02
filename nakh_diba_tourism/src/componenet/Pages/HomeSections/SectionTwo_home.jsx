import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import './section.css'


const Services = ({ icon, serviceName, text }) => {
    return (
        <Box id='service_card'>
            <Box id="service_font"><i className={icon}></i></Box>
            <Heading size={'md'} color={'gray.600'}>{serviceName}</Heading>
            <Text>{text}
            </Text>
        </Box>
    )
}

export const SectionTwo_home = () => {
    return (
        <Box border={'1px solid'} mt={'40px'}>
            <Heading> Services </Heading>
            <Box id="section_two_container">


            <Services icon="fa-solid fa-hotel fa-2xl" serviceName="Arrodable Hotels"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem tempora facilis architecto molestiae sit!" />
            <Services icon="fa-solid fa-utensils fa-2xl" serviceName="Good Food"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem tempora facilis architecto molestiae sit!" />
            <Services icon="fa-solid fa-route fa-2xl" serviceName="Guide"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem tempora facilis architecto molestiae sit!" />
            <Services icon="fa-solid fa-tent  fa-2xl" serviceName="Camping"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem tempora facilis architecto molestiae sit!" />
            <Services icon="fa-solid fa-truck-monster fa-2xl" serviceName="Off Road"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem tempora facilis architecto molestiae sit!" />
            <Services icon="fa-solid fa-mountain fa-2xl" serviceName="Adventure"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem tempora facilis architecto molestiae sit!" />



        </Box>
        </Box>
    )
}
