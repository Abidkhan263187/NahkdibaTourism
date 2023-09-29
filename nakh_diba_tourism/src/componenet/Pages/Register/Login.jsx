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
  useToast,
} from '@chakra-ui/react';
import './reg.css'
import { Link, useNavigate } from 'react-router-dom';
import { LoginFunc } from '../../Redux/api';
import { userLogin } from '../../Redux/action';
import { useDispatch } from 'react-redux';
import { GoogleLoginButton } from './GoogleLoginButton';
import { validateEmail } from './SignUp';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const toast = useToast()
  const [user, setUser] = useState({ email: "", password: "" });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const gotoHome = () => {
    toast({
      title: 'Welcome back !',
      description: "Login Successfully",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    setTimeout(()=>{
      window.location.href = '/'
    },2500)
  
  };


  const handleChangeEmail = (e) => {
    const enteredEmail = e.target.value;
    setUser({ ...user, email: enteredEmail });
    setIsValidEmail(validateEmail(enteredEmail));
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
      <Button size={'sm'} variant={'outline'}  id="homeButton" onClick={() => navigate('/')}><i class="fa-solid fa-house"></i></Button>

      <VStack spacing={4} align="stretch" id="login_main">
        <FormControl isInvalid={isFormSubmitted && !isFormValid}>
          <Heading w={'100%'} color='orange.400' border={'none'} variant={'outline'} size={'lg'}>Login Form</Heading>
          <FormControl isInvalid={!isValidEmail} >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChangeEmail}
              required
              placeholder='enter email'
            />
            <FormErrorMessage>{isValidEmail ? '' : 'Invalid email address'}</FormErrorMessage>
          </FormControl>
        </FormControl>
        <FormControl isInvalid={isFormSubmitted && !isFormValid}>
          <FormLabel>Password</FormLabel>
          <Input
              type={showPassword ? 'text' : 'password'}
            value={user.password}
            name="password"
            outlineOffset={'none'}
            onChange={handleInputChange}
            placeholder='enter password'
            autoComplete="nope"
            isRequired
          />
          <i
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: '70%',
              right: '10px',
              transform: 'translateY(-50%)',
              color: "gray",
              // cursor: 'pointer'
            }}
            className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
          ></i>
          <FormErrorMessage>Field is required</FormErrorMessage>
        </FormControl>
        <Flex justifyContent={'space-between'}>
          <Checkbox >Remember me</Checkbox>
          <Text fontSize={["sm",""]} id="create_acc" color={'red.500'} as={Link} to="/forgotPassword">forgot password ?</Text>
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
