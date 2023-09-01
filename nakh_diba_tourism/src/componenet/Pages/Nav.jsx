import React from 'react';
import { Box, Flex, Spacer, Link, Heading, Button, useDisclosure } from '@chakra-ui/react';

 export const Nav=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="teal" p={4}>
      <Flex alignItems="center"
     
      >
        <Heading size="md" color="white">
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


