import React, { useEffect, useState } from 'react';
import { Box, Flex, Spacer, Heading, Button, useDisclosure, Icon, VStack, Text, Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FaToriiGate, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Import the icons
import { useSelector } from 'react-redux';
import img from '../image/plane.png'

export const Nav = () => {

  const [user, setUser] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { city } = useSelector((store) => store)
  useEffect(() => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    setUser(userData);
  }, [user]);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    setUser(null);
    localStorage.clear()
    sessionStorage.removeItem('package')
    window.location.href = "/login"

  };

  return (
    <Box bg="transparent" variant={'outline'} >
      <Flex alignItems="center" id="navbar">
        <Heading display={'flex'} justifyContent={'center'} alignItems={'center'} size="md" color="white" fontWeight={'600'} as={Link} to={'/'}>

          <Box> <Image src={img} w={'30px'} /></Box> &nbsp;&nbsp;Travelena {city && <Text id="log_person"> <i style={{ color: "orange" }} class="fa-solid fa-location-dot"></i>  &nbsp;{city}</Text>}
        </Heading>

        {/* Mobile Menu Button */}
        <Button
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          ml={3}
          id='mob_menue_nav'
          variant="outline"
          backgroundColor="#03698e"
          color={'white'}
        >
          Menu
        </Button>

        {/* Desktop Links */}
        <Spacer />
        <Box justifyContent={'space-around'} id="nav_option" alignItems={'center'} width={['none', '80%', '55%']} display={{ base: 'none' }}>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} ml={4} to="/">
            Home
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} ml={4} to="/packages">
            Packages
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} ml={4} to="/overview">
            News
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} ml={4} to="/book">
            Book
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} ml={4} to="/contact">
            Contact
          </Box>
          {user && user !== '' ? (

            <VStack overflow={'auto'} alignItems="center">
              <Button variant="link" fontWeight={'600'} color='white' onClick={handleLogout}>
                <Icon as={FaSignOutAlt} ml={2} /> Logout
              </Button>
              <Box id="log_person2">
                {user}
              </Box>
            </VStack>
          ) : (

            <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} ml={4} to="/login">
              <Icon as={FaUser} mr={2} /> Login
            </Box>
          )}
        </Box>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box id="mob_nav" mt={4}>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/">
            Home
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/packages">
            Packages
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/overview">
            News
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/book">
            Book
          </Box>
          <Box as={Link} id="nav_li" color="black" fontSize={'large'} fontWeight={'600'} to="/contact">
            Contact
          </Box>
          {user ? (

            <VStack overflow={'auto'} alignItems="center">

              <Button variant="link" id="nav_li" color='white' onClick={handleLogout}>
                <Icon as={FaSignOutAlt} ml={2} /> Logout
              </Button>
              <Box id="log_person2">
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
