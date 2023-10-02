import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Grid, HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export const SpecialPlace_card = ({ icon, photo, location,reviews,price,mrp,desc }) => {
    const navigate = useNavigate()

    const handleBook = (photo, location,reviews,price,mrp,desc) => {
        

        const Placeobj ={
           photo,
           location,
           reviews,
           price,
           mrp,
           desc
        }
        sessionStorage.setItem('package',JSON.stringify(Placeobj))
        localStorage.setItem('bookStyle',JSON.stringify('package'))
         localStorage.setItem('hotel',JSON.stringify(''))
        navigate('/book')
        // console.log("yes")
    }
    return (
        <Box id="specialPlace_card">
            <Box>
                <Image src={photo} />
            </Box>
            <Text mt={'20px'} size={'md'} fontWeight={'600'}> {<i style={{ color: "orange", marginRight: '5px' }} class={icon}></i>} {location}</Text><Text>{desc}</Text><Box>
                <HStack alignItems={'center'} >
                    <Text>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <StarIcon
                                    key={i}
                                    color={i < 5 ? 'teal.500' : 'gray.300'} />
                            ))}
                    </Text>
                    <Text as='span' ml='2' mt={'5px'} color='gray.600' fontSize='sm'>
                        {reviews} reviews
                    </Text>
                </HStack>
            </Box>
            <HStack>
                <Text fontWeight={'600'}>${price}</Text>
                <s>${mrp}</s>
            </HStack>
            <Button fontWeight={'600'} bottom={0} fontSize={"lg"} bgColor={' #037dab'} color={'white'} onClick={()=>handleBook(photo, location,reviews,price,mrp,desc)} >Book</Button>
        </Box>
    )
}
export const SectionThree = () => {
    return (
        <Box id='SectionThree_card_container'>

            <Grid  id='SectionThree_card'>
            <SpecialPlace_card
  location="Paris"
  price="98,000"
  reviews="4,895"
  mrp="1,45,698"
  photo="https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
  icon="fa-solid fa-location-dot fa-lg"
  desc="Experience the timeless allure of Paris, where the Eiffel Tower stands as a symbol of romance."
/>

<SpecialPlace_card
  location="New York"
  price="47,880"
  reviews="3,777"
  mrp="87,000"
  photo="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bd/6f/17.jpg"
  icon="fa-solid fa-location-dot fa-lg"
  desc="Discover the vibrant spirit of New York City, where the lights of Times Square illuminate your journey."
/>

<SpecialPlace_card
  location="Dubai"
  price="87,000"
  reviews="8,123"
  mrp="1,01,000"
  photo="https://www.theglobetrottingdetective.com/wp-content/uploads/2021/01/Dubai-in-7-days-and-best-things-to-do-in-Dubai-.jpg"
  icon="fa-solid fa-location-dot fa-lg"
  desc="Indulge in the opulence of Dubai, where modern skyscrapers meet the timeless beauty of the desert."
/>

<SpecialPlace_card
  location="Agra"
  price="20,000"
  reviews="14,897"
  mrp="47,880"
  photo="https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/56/f0/f9.jpg"
  icon="fa-solid fa-location-dot fa-lg"
  desc="Marvel at the Taj Mahal's exquisite beauty in Agra, a testament to eternal love and architectural mastery."
/>

<SpecialPlace_card
  location="Tokyo"
  price="66,000"
  reviews="5,7894"
  mrp="98,000"
  photo="https://a.cdn-hotels.com/gdcs/production26/d1450/64fe038c-0da0-413f-9fcd-dbb337ce3012.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  icon="fa-solid fa-location-dot fa-lg"
  desc="Immerse yourself in Tokyo's rich culture, from the serene temples to the bustling city streets."
/>

<SpecialPlace_card
  location="Switzerland"
  price="39,000"
  reviews=""
  mrp="66,000"
  photo="https://a.cdn-hotels.com/gdcs/production179/d1127/52a93d48-b9d4-4a7e-9fb7-c9466da4c344.jpg?impolicy=fcrop&w=800&h=533&q=medium"
  icon="fa-solid fa-location-dot fa-lg"
  desc="Explore the breathtaking landscapes of Switzerland, where the majestic Alps await your adventure."
/>



            </Grid>
        </Box>
    )
}
