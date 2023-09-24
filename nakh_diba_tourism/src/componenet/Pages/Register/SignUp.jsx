import React, { useState } from 'react';
import axios from 'axios'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux'
import { SignupFunc } from '../../Redux/api';
import { Link, useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const navigate = useNavigate()
  const { signUp } = useSelector((store) => {
    return store
  })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    // privacyPolicyAccepted: false,
  });
  const dispatch = useDispatch()



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  };

  const handlePrivacyPolicyChange = (e) => {
    setFormData({
      ...formData,
      privacyPolicyAccepted: e.target.checked,
    });
  };

  const gotoLogin = () => {
    alert("signin successful")
    navigate('/login')
    console.log("yes")
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(SignupFunc(formData,gotoLogin))
   
  
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
      // privacyPolicyAccepted: false,
    })

  };

  return (

    <Box>
       {/* <Button size={'sm'} variant={'outline'} id="homeButton" onClick={()=>navigate('/')}>Home</Button> */}
       <VStack spacing={4} align="stretch" id="signup_main">
       <Heading w={'100%'} color='orange.400' border={'none'} variant={'outline'} size={'lg'}>SignUp Form</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl >
          <FormLabel fontSize={'md'}>First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            // autoComplete="nope"
            required

          />
        </FormControl>
        <FormControl >
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            // autoComplete="nope"
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            // autoComplete="nope"
            required
          />
          <FormErrorMessage>{"error"}</FormErrorMessage>
        </FormControl>
        <FormControl >
          <FormLabel>Mobile Number</FormLabel>
          <Input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            // autoComplete="nope"
            required
          />
          <FormErrorMessage>{"error"}</FormErrorMessage>
        </FormControl>
        <FormControl >
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FormErrorMessage>{"error"}</FormErrorMessage>
        </FormControl>
        <FormControl >
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl m={'10px 0px'}>
          <Checkbox
            name="privacyPolicyAccepted"
            isChecked={formData.privacyPolicyAccepted}
            onChange={handlePrivacyPolicyChange}
          >
            I accept the privacy policy
          </Checkbox>
        </FormControl>
        <Text m="auto">Already have an Account <span style={{color:"blue",textDecoration:"underline"}}> <Link  to="/login">Login</Link></span></Text>
        <Button mt={'10px'} w={'100%'} type="submit" colorScheme="orange">
          Sign Up
        </Button>
      </form>
    </VStack>
    </Box>
   
  );
};


