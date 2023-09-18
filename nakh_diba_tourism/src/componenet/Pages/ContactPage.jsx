import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Spacer,
  Link as ChakraLink,
  Icon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from React Router
import { Nav } from './Nav';
import { Footer } from './Footer';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactPage() {
  return (
    <Box>
      <Nav />
      <Box p={4} maxW="600px" mx="auto" mt="50px" mb="50px">
        <Heading>Contact Us</Heading>
        <Text mt={4} fontSize="lg">
          We'd love to hear from you. Send us a message, and we'll get back to you as soon as possible.
        </Text>
        <form>
          <FormControl mt={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your Name" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Your Email" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
          <Button mt={4} colorScheme="orange" type="submit">
            Send Message
          </Button>
        </form>
        <Box mt={8} border={'1px solid orange '} borderRadius={'10px'} padding={"20px 10px"}>
          <Text fontWeight="bold">Contact Information:</Text>
          <Flex mt={2} margin={"auto"} w={'max-content'} >
            <Icon as={FaPhone}  style={{color:"orange"}} boxSize={5} mr={2} />
            <Text textAlign="center" >Phone: +91-62-8000-7521</Text>
          </Flex>
          <Flex  margin={"auto"} w={'max-content'} mt={2} align="center">
            <Icon as={FaEnvelope} style={{color:"orange"}} boxSize={5} mr={2} />
            <Text>Email: abidkhan263187@gmail.com</Text>
          </Flex>
          <Text mt={4} fontWeight="bold">Follow Us:</Text>
          <Flex mt={2}  margin={"auto"} w={'max-content'}>
            <RouterLink to="/facebook" target="_blank">
              <Icon as={FaFacebook}  style={{color:"darkblue"}} boxSize={6} />
            </RouterLink>&nbsp;
            <RouterLink to="/twitter"  style={{color:"lightblue"}} target="_blank">
              <Icon as={FaTwitter} boxSize={6} />
            </RouterLink>&nbsp;
            <RouterLink to="/instagram" target="_blank">
              <Icon as={FaInstagram}  style={{color:"pink"}}  boxSize={6} />
            </RouterLink>
          </Flex>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default ContactPage;
