import React, { useEffect, useState } from 'react';
import { Box, Flex, Spacer, Heading, Button, useDisclosure, Icon, VStack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FaToriiGate, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import the icons
import { useSelector } from 'react-redux';


export const Nav = () => {

  const [user, setUser] = useState(null); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {city}=useSelector((store)=>store)
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    setUser(userData);

  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    localStorage.clear()
    window.location.href = "/login"

  };

  return (
    <Box bg="transparent" variant={'outline'} >
      <Flex alignItems="center" id="navbar">
        <Heading size="md" color="black" fontWeight={'700'} as={Link} to={'/'}>
          <Icon as={FaToriiGate} style={{ color: 'blue' }} /> Travelena
        { city &&<Text id="log_person"> <i style={{color:"orange"}} className="fa-solid fa-location-dot"></i>&nbsp;{city}</Text>}  
        </Heading>

        {/* Mobile Menu Button */}
        <Button
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          ml={3}
          id='mob_menue_nav'
          variant="outline"
          colorScheme="white"
        >
          Menu
        </Button>

        {/* Desktop Links */}
        <Spacer />
        <Flex justifyContent={'space-around'} alignItems={'center'} width={'40%'} display={{ base: 'none', md: 'flex' }}>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'} ml={4} to="/">
            Home
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'} ml={4} to="/packages">
            Packages
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'} ml={4} to="/overview">
            News
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'} ml={4} to="/book">
            Book
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'} ml={4} to="/contact">
            Contact
          </Box>
          {user ? (
           
            <VStack overflow={'auto'} alignItems="center">

              <Button variant="link" color='white' onClick={handleLogout}>
                <Icon as={FaSignOutAlt} ml={2} /> Logout
              </Button>
              <Box id="log_person">
                {user}
              </Box>
            </VStack>
          ) : (
           
            <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'800'} ml={4} to="/login">
              <Icon as={FaUser} mr={2} /> Login
            </Box>
          )}
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box id="mob_nav" mt={4}>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'}  to="/">
            Home
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'}  to="/packages">
            Packages
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'}  to="/overview">
            News
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'}  to="/book">
            Book
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'700'}  to="/contact">
            Contact
          </Box>
          {user ? (
           
            <VStack overflow={'auto'} alignItems="center">

              <Button variant="link" color='white' onClick={handleLogout}>
                <Icon as={FaSignOutAlt} ml={2} /> Logout
              </Button>
              <Box id="log_person">
                {user}
              </Box>
            </VStack>
          ) : (
           
            <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'800'} ml={4} to="/login">
              <Icon as={FaUser} mr={2} /> Login
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
