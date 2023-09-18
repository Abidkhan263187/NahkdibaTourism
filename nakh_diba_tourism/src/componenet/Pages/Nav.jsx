import React from 'react';
import { Box, Flex, Spacer, Heading, Button, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'

 export const Nav=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="transparent" variant={'outline'} p={4}
  
    >
      <Flex alignItems="center"
     
      >
        <Heading size="md" color="black"  fontWeight={'700'}>
        <i class="fa-solid fa-torii-gate fa-xl" style={{color: "blue"}}></i>  Nahkdiba.Tourism
        </Heading>

        {/* Mobile Menu Button */}
        <Button
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          ml={3}
          variant="outline"
          colorScheme="white"
        >
          Menu
        </Button>

        {/* Desktop Links */}
        <Spacer />
        <Flex
        justifyContent={'space-around'}
    
        
          width={"40%"}
        display={{ base: 'none', md: 'flex' }}>
         
          <Box as={Link}  id='nav_li' color="black" fontSize={'large'} fontWeight={'700'} ml={4} to="/">
            Home
          </Box>
           <Box as={Link}  id='nav_li' color="black"fontSize={'large'} fontWeight={'700'} ml={4} to="/packages">
            Packages
          </Box>
          <Box as={Link}   id='nav_li' color="black"fontSize={'large'} fontWeight={'700'} ml={4}to="/overview">
            News
          </Box>
         
          <Box as={Link}  id='nav_li' color="black"fontSize={'large'} fontWeight={'700'} ml={4} to="/book">
            Book
          </Box>
          <Box as={Link}  id='nav_li' color="black"fontSize={'large'} fontWeight={'700'} ml={4} to="/contact">
            Contact
          </Box>
          <Box as={Link}  id='nav_li' color="black"fontSize={'large'} fontWeight={'700'} ml={4} to="#">
            Login
          </Box>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box as={Link}  mt={4} display={{ base: 'block', md: 'none' }}>
          <Box as={Link}  color="white" ml={4} to="#">
            Home
          </Box>
          <Box as={Link}  color="white" ml={4} to="#">
            packages
          </Box>
            <Box as={Link}  color="white" ml={4} to="/news_events">
            News
          </Box>
          <Box as={Link}  color="white" ml={4} to="#">
            Book
          </Box>
    
          <Box as={Link}  color="white" ml={4} to="#">
            Contact
          </Box>
          <Box/>
        </Box>
       
      )}
    </Box>
  );
}


