import React, { useState } from 'react';
import axios from 'axios';
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
  Tooltip,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { SignupFunc } from '../../Redux/api';
import { Link, useNavigate } from 'react-router-dom';

export function validateEmail(email) {
  // Updated email regex for stricter validation
  const emailRegex = /^[a-zA-Z]{2,}[0-9]{2,}@(gmail\.com|yahoo\.com)$/;
  return emailRegex.test(email);
}

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const toast=useToast()
  const [isValidEmail, setIsValidEmail] = useState(true);
  const navigate = useNavigate();
  const { signUp } = useSelector((store) => {
    return store;
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    // privacyPolicyAccepted: false,
  });
  const dispatch = useDispatch();

  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'confirmPassword') {
      if (formData.password !== value) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError('');
      }
    }
  };

  const handlePrivacyPolicyChange = (e) => {
    setFormData({
      ...formData,
      privacyPolicyAccepted: e.target.checked,
    });
  };

  const gotoLogin = () => {
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })

    setTimeout(()=>{
      navigate('/login');
    },2000)
    // 
  
  };

  const handleChangeEmail = (e) => {
    const enteredEmail = e.target.value;
    setFormData({ ...formData, email: enteredEmail });
    setIsValidEmail(validateEmail(enteredEmail));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (passwordError) {
      return; // Don't submit if there's a password error
    }
    dispatch(SignupFunc(formData, gotoLogin));

    setFormData({
      ...formData,
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <Box>
      <VStack spacing={4} align="stretch" id="signup_main">
        <Heading w={'100%'} color="orange.400" border={'none'} variant={'outline'} size={'lg'}>
          SignUp Form
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel fontSize={'md'}>First Name</FormLabel>
            <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
          </FormControl>
          <FormControl isInvalid={!isValidEmail} mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChangeEmail}
              required
            />
            <FormErrorMessage>{isValidEmail ? '' : 'Invalid email address'}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  top: '70%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
              ></i>
            
          </FormControl>
         
          <FormControl isInvalid={!!passwordError}>
            <FormLabel >Confirm Password</FormLabel>
            <Input
             type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
             <i
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: '60%',
              right: '10px',
              transform: 'translateY(-50%)',
              // cursor: 'pointer',
            }}
            className={showPassword ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
          ></i>
            {passwordError && (
              <FormErrorMessage>{passwordError}</FormErrorMessage>
            )}
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
          <Text m="auto">
            Already have an Account{' '}
            <span style={{ color: 'blue', textDecoration: 'underline' }}>
              {' '}
              <Link to="/login">Login</Link>
            </span>
          </Text>
          <Button isDisabled={!isValidEmail || !!passwordError} mt={'10px'} w={'100%'} type="submit" colorScheme="orange">
            Sign Up
          </Button>
        </form>
      </VStack>
    </Box>
  );
};
