import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import './reg.css'
import { Link, useNavigate } from 'react-router-dom';
import { LoginFunc } from '../../Redux/api';
import { userLogin } from '../../Redux/action';
import { useDispatch } from 'react-redux';
import { GoogleLoginButton } from './GoogleLoginButton';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [user, setUser] = useState({ email: "", password: "" });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const gotoHome = () => {
    alert("Login successful");
    window.location.href = '/'
  };

  const handleClick = () => {

    setIsFormSubmitted(true);

    if (isFormValid) {
      // Only run the functionality if the form is valid
      LoginFunc(user, gotoHome);
      dispatch(userLogin(true))
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Checking if both fields are filled
    setIsFormValid(user.email !== "" && user.password !== "");
  };

  return (
    <Box>
      <Button size={'sm'} variant={'outline'} id="homeButton" onClick={() => navigate('/')}>Home</Button>

      <VStack spacing={4} align="stretch" id="login_main">
        <FormControl isInvalid={isFormSubmitted && !isFormValid}>
          <Heading w={'100%'} color='orange.400' border={'none'} variant={'outline'} size={'lg'}>Login Form</Heading>
          <FormLabel mt={"30px"}>Email</FormLabel>
          <Input
            type="email"
            value={user.email}
            name="email"
            onChange={handleInputChange}
            placeholder={"enter email"}
            autoComplete="nope"
            isRequired
          />
          <FormErrorMessage>Field is required</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={isFormSubmitted && !isFormValid}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={user.password}
            name="password"
            outlineOffset={'none'}
            onChange={handleInputChange}
            placeholder='enter password'
            autoComplete="nope"
            isRequired
          />
          <FormErrorMessage>Field is required</FormErrorMessage>
        </FormControl>
        <Flex justifyContent={'space-between'}>
          <Checkbox>Remember me</Checkbox>
          <Text id="create_acc" color={'red.500'} as={Link} to="/forgotPassword">forgot password ?</Text>
        </Flex>

        <Button colorScheme="orange" onClick={handleClick} isDisabled={!isFormValid}>
          Login
        </Button>
        <Text id="create_acc" color={"blue"} textDecoration={'underline'} as={Link} to={'/signup'}>Create A New Account</Text>
        <Box m={"auto"}>
        <GoogleLoginButton />
        </Box>
      
      </VStack>
    </Box>
  );
};
