import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Input,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Flex,
  Badge,
} from '@chakra-ui/react';

import { StarIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';

export const BookingCard = () => {
  const navigate=useNavigate()
  const [packageData, setPackageData] = useState({});
  const [hotelObj, setHotelObj] = useState({})
  const [booktype, setBooktype] = useState({})
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    adults: '',
    children: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem('tripForm', JSON.stringify(formData));
    navigate('/reciept')
  };

  useEffect(() => {
    const pack = JSON.parse(sessionStorage.getItem('package')) || '';
    const hotelData = JSON.parse(localStorage.getItem('hotel')) || '';
    const city = JSON.parse(localStorage.getItem('city')) || '';
    setFormData({ ...formData, to: pack.location  ? pack.location : hotelData.placeName, from: city })
    setHotelObj(hotelData)

    setPackageData(pack);
    
  }, []);
  useEffect(() => {
    const bookingStyle = JSON.parse(localStorage.getItem('bookStyle')) || ''
    setBooktype(bookingStyle)
  }, [])



  return (
    <Box id="bookCard_main">
      <Box id="book_right" p={4}>
        <form id="book_form"  onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>From</FormLabel>
              <Input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                isRequired

              />
            </FormControl>
            <FormControl>
              <FormLabel>To</FormLabel>
              <Input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
                isRequired
              />
            </FormControl>
            <HStack display={['block','flex']} w={'90%'} justifyContent={'space-around'} spacing={4}>
              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  isRequired
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  isRequired
                />
              </FormControl>
            </HStack>
            <HStack spacing={4}  w={'90%'}>
              <FormControl>
                <FormLabel>Adults</FormLabel>
                <Select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  isRequired
                >
                   <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Children</FormLabel>
                <Select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  isRequired
                >
                  <option value="">Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Select>
              </FormControl>
            </HStack>
            <Button backgroundColor=' #037dab' color={'white'} w={'80%'} type='submit'  >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
      {booktype !== 'hotel' ? (<Box id='book_right'>
        {packageData ? (<Box  >
          {packageData && (
            <Box id="specialPlace_card">
              <Box>
                <Image src={packageData.photo} />
              </Box>
              <Text mt={'20px'} size={'md'} fontWeight={'600'}>
                <i
                  style={{ color: ' #037dab', marginRight: '5px' }}
                  className="fa-solid fa-location-dot fa-lg"
                ></i>{' '}
                {packageData.location}
              </Text>
              <Text>
               {packageData.desc}
              </Text>
              <HStack>
                <Text>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 5 ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                </Text>
                <Text as="span" ml="2" color="gray.600" fontSize="sm">
                  {packageData.reviews} reviews
                </Text>
              </HStack>
              <HStack>
                <Text fontWeight={'600'}>${packageData.price}</Text>
                <s>${packageData.mrp}</s>
              </HStack>
            </Box>
          )}
        </Box>) : (<Box id='book_right'>
          <Button as={Link} to={'/packages'} backgroundColor=' #037dab' color={'white'}>Select Package</Button>
        </Box>)}
      </Box>) : (<Box id='book_right'>
        {hotelObj ? (<Box >
          {hotelObj && (
            <Box p={'5px 5px 0px 5px'} margin={'auto'} maxW='sm' w={"90%"} borderWidth='1px' borderRadius='lg' >
              <Image margin={"auto"} w={"100%"} h={"100%"} src={hotelObj.Image} alt="img" />
              <Box p='6' textAlign={'start'} >
                <Box display='flex' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                  </Badge>
                  <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2'>
                    2 beds &bull; 3 baths
                  </Box>
                </Box>

                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1} >
                  {hotelObj.HotelName}
                </Box>

                <Flex alignItems={'center'} justifyContent={'space-between'} > <strong>${hotelObj.PriceRange}</strong><Box as='span' color='gray.600' fontSize='sm'> <s id="s">${hotelObj.Mrp}</s></Box>
                  <p style={{ color: "green", fontWeight: "700" }}><strong>{hotelObj.Discount} </strong>Off</p>
                </Flex>

                <Box display='flex' mt='2' alignItems='center'>
                  {Array(5).fill('').map((_, i) => (
                    <StarIcon key={i}
                      color={i < hotelObj.Rating ? '  #037dab' : 'gray.300'} />
                  ))}
                  <Box as='span' ml='2' color='gray.500' fontSize='sm'>
                    {hotelObj.Review} reviews
                  </Box>
                </Box>

              </Box>
            </Box>
          )}
        </Box>) : (<Box id='book_right'>
          <Button as={Link} to={'/packages'} backgroundColor=' #037dab' color={'white'}>Select Hotel </Button>
        </Box>)}
      </Box>)}

    </Box>
  );
};

function BookForm() {
  return (
    <Box p={4} mt={'60px'} borderRadius="lg">
      <Image
        w={'100%'}
        height={'70vh'}
        objectFit="fill"
        src="https://bpc.h-cdn.co/assets/17/23/768x384/gallery-1496680745-most-beautiful-places-in-world.gif"
        alt="Tour Banner"
        borderRadius="lg"
      />
      <Heading mt={'7%'}>
        Book <span style={{ color: ' #037dab' }}>Your Trip!</span>
      </Heading>
      <BookingCard />
    </Box>
  );
}

export default BookForm;
