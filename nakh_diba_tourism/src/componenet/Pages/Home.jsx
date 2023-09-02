import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  Center,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import video from '../video/back_video3.mp4';
import { Nav } from './Nav';
import { SectionOne } from './SectionOne';
import { SectionTwo_home } from './HomeSections/SectionTwo_home';
import { SectionThree } from './HomeSections/SectionThree';
import { SectionFour } from './HomeSections/SectionFour';

export const Home = () => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Searching...');
  };

  return (
    <><Box position="relative" overflow="hidden">

      <div
        style={{
          width: '100%',
          height: '100vh',
          position: 'absolute',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Nav />
      <Center height="100vh">
        <Box
          mt={"100px"}
          boxShadow="lg"
          w={['100%', '80%', '80%']}
          p={['10px', '15px']}
          borderRadius={'10px'}
          zIndex={1}
          position="relative"
        >
          <Text fontSize={['2xl', '3xl', '4xl']} color="gray.100" mb={4}>
            Explore the World!
          </Text>
          <Flex

            bg="rgba(255, 255, 255, 0.9)"
            borderRadius={'10px'}
            p={['10px', '15px']}
            flexWrap="wrap"
            alignItems={['center', 'flex-start', 'center']}
            justifyContent={['center', 'space-around']}
          >
            <Input
              placeholder="Enter Your Continent"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              p={['10px', '12px']}
              size="md"
              mb={[2, 0]}
              w={['100%', 'auto']} />
            <DatePicker
              placeholderText="     Select start date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd"
              className="date-picker"
              mb={10}
              w={['100%', 'auto']}
              borderRadius={'10px'} />
            <DatePicker
              placeholderText="     Select end date"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd"
              className="date-picker"
              mb={10}
              w={['100%', 'auto']}
              borderRadius={'10px'} />
            <NumberInput
              value={adults}
              onChange={(valueString) => setAdults(parseInt(valueString))}
              min={1}
              max={10}
              size="md"
              mb={[2, 0]}
              w={['30%', 'auto', '10%']}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <IconButton
              colorScheme="blue"
              aria-label="Search"
              icon={<SearchIcon />}
              onClick={handleSearch}
              size="lg" />
          </Flex>
        </Box>
      </Center>
    </Box>
      <Box>
        <SectionOne />
      </Box>
      <Box>
        <SectionTwo_home />
      </Box>
      <Box>
        <SectionThree />
      </Box>
      <Box>
        <SectionFour/>
      </Box>

    </>
  );
};
