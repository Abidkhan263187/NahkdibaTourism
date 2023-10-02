import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Flex,
  Spacer,
  Input,
  Icon,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

function ReviewBox() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 5, // Default rating
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the feedback data to your server
    console.log(formData);
  };

  // Function to render star icons based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          as={FaStar}
          color={i <= formData.rating ? '#037dab' : 'gray.300'}
          cursor="pointer"
          onClick={() => handleRatingChange(i)}
        />
      );
    }
    return stars;
  };

  return (
    <Box p={4} maxW="600px" mx="auto" mt="50px">
      <Heading>Feedback</Heading>
      <Text mt={4} fontSize="lg">
        We value your feedback! Please let us know your thoughts about our website and service.
      </Text>
      <form onSubmit={handleSubmit} id="booking_main">
        <FormControl mt={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleInputChange}
            value={formData.name}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email Address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInputChange}
            value={formData.email}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Feedback</FormLabel>
          <Textarea
            name="feedback"
            placeholder="Your Feedback"
            onChange={handleInputChange}
            value={formData.feedback}
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Rating</FormLabel>
          <Flex alignItems="center">{renderStars()}</Flex>
        </FormControl>
        <Button mt={4} color={'white'} backgroundColor="#037dab" type="submit">
          Submit Feedback
        </Button>
      </form>
    </Box>
  );
}

export default ReviewBox;
