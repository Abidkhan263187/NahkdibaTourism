import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from 'react-router-dom'


const SpecialPlace_card = ({ icon, photo, location }) => {
    const navigate=useNavigate()

    const handleBook=()=>{
        navigate('/book')
        // console.log("yes")
    }
    return (
        <Box id="specialPlace_card">
            <Box>
                <Image src={photo} />
            </Box>
            <Text mt={'20px'} size={'md'} fontWeight={'600'}> {<i style={{ color: "orange", marginRight: '5px' }} class={icon}></i>} {location}</Text><Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, reiciendis!</Text><Box>
                <HStack>
                    <Text>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < 5 ? 'teal.500' : 'gray.300'} />
                            ))}
                    </Text>
                    <Text as='span' ml='2' color='gray.600' fontSize='sm'>
                        3,777 reviews
                    </Text>
                </HStack>
            </Box>
            <HStack>
                <Text fontWeight={'600'}>$98,000</Text>
                <s>$1,34567</s>
            </HStack>
            <Button fontWeight={'600'} fontSize={"lg"} bgColor={'orange'} color={'white'} onClick={handleBook} >Book</Button>
        </Box>
    )
}
export const SectionThree = () => {
    return (
        <Box id='SectionThree_card_container'>
          
            <Box id='SectionThree_card'>
                <SpecialPlace_card location="Paris" photo="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900" icon="fa-solid fa-location-dot fa-lg" />
                <SpecialPlace_card location="New York" photo="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bd/6f/17.jpg" icon="fa-solid fa-location-dot fa-lg" />
                <SpecialPlace_card location="Dubai" photo="https://www.theglobetrottingdetective.com/wp-content/uploads/2021/01/Dubai-in-7-days-and-best-things-to-do-in-Dubai-.jpg" icon="fa-solid fa-location-dot fa-lg" />
                <SpecialPlace_card location="Agra" photo="https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/56/f0/f9.jpg" icon="fa-solid fa-location-dot fa-lg" />
                <SpecialPlace_card location="Tokyo" photo="https://a.cdn-hotels.com/gdcs/production26/d1450/64fe038c-0da0-413f-9fcd-dbb337ce3012.jpg?impolicy=fcrop&w=800&h=533&q=medium" icon="fa-solid fa-location-dot fa-lg" />
                <SpecialPlace_card location="Switzerland" photo="https://a.cdn-hotels.com/gdcs/production179/d1127/52a93d48-b9d4-4a7e-9fb7-c9466da4c344.jpg?impolicy=fcrop&w=800&h=533&q=medium" icon="fa-solid fa-location-dot fa-lg" />
            </Box>
        </Box>
    )
}
