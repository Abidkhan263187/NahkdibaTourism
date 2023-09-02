import React from 'react';
import { Box, Flex, Spacer, Link, Heading, Button, useDisclosure } from '@chakra-ui/react';

 export const Nav=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="transparent" variant={'outline'} p={4}
  
    >
      <Flex alignItems="center"
     
      >
        <Heading size="lg" color="black"  fontWeight={'700'}>
          Logo
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
          <Link id='nav_li' color="black" fontSize={'large'} fontWeight={'700'} ml={4} href="#">
            Home
          </Link>
          <Link  id='nav_li' color="black"fontSize={'large'} fontWeight={'700'} ml={4} href="#">
            News
          </Link>
          <Link id='nav_li' color="black" fontSize={'large'} fontWeight={'700'} ml={4} href="#">
            About
          </Link>
          <Link id='nav_li' color="black"fontSize={'large'} fontWeight={'700'} ml={4} href="#">
            Contact
          </Link>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box mt={4} display={{ base: 'block', md: 'none' }}>
          <Link color="white" ml={4} href="#">
            Home
          </Link>
          <Link color="white" ml={4} href="#">
            News
          </Link>
          <Link color="white" ml={4} href="#">
            About
          </Link>
          <Link color="white" ml={4} href="#">
            Contact
          </Link>
        </Box>
      )}
    </Box>
  );
}


