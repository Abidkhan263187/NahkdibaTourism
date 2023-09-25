import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
} from '@chakra-ui/react';

function validateEmail(email) {
  // Updated email regex for stricter validation
  const emailRegex = /^[a-zA-Z]{2,}[0-9]{2,}@(gmail\.com|yahoo\.com)$/;
  return emailRegex.test(email);
}

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      // Process the signup form
      console.log('Email is valid. Submitting form...');
      // Add your form submission logic here
    } else {
      console.log('Invalid email. Please use a valid email address.');
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg">
      <Heading size="lg" mb={4}>
        Signup Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={!isValidEmail} mb={4}>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            isRequired
          />
          <FormErrorMessage>
            {isValidEmail ? '' : 'Invalid email address'}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};
