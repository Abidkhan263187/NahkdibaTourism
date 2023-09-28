import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Spinner, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SuccessfulTripBookingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    // Simulate loading data or an API request
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate a 2-second delay
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    },3000)
  }, [])

  return (
    <Box p={8}>
      <Heading size="xl" mb={4}>
        ✈️ Trip Booked Successfully!
      </Heading>
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center" height="200px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Box>
          <Text fontSize="lg">
            🎉 Congratulations! Your trip has been booked.
          </Text>

        </Box>
      )}
    </Box>
  );
};

export default SuccessfulTripBookingPage;
