import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  Flex,
  Spacer,
  Image,
  Heading,
  Text,
  Select, // Import Select component
} from '@chakra-ui/react';

function BookForm() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    fromDate: '',
    toDate: '',
    travelVia: '',
    adults: 0,
    children: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const travelViaOptions = ['Car', 'Bus', 'Train', 'Flight'];
  const adultOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const childrenOptions = [0, 1, 2, 3, 4, 5];

  return (
   
      <Box  p={4}  borderRadius="lg">
        <Image w={"100%"} height={"70vh"} objectFit={"fill"} src="https://bpc.h-cdn.co/assets/17/23/768x384/gallery-1496680745-most-beautiful-places-in-world.gif" alt="Tour Banner" borderRadius="lg" />
        <Heading mt={'7%'}> Book <span style={{color:'orange'}}>Your Trip!</span> </Heading>
        <form onSubmit={handleSubmit} id="booking_main">
          <Flex mt={4}  >
            <Box flex="1" mr={2}>
              <Input
                type="text"
                name="from"
                placeholder="From"
                onChange={handleInputChange}
                value={formData.from}
                required
              />
            </Box>
            <Box flex="1" ml={2}>
              <Input
                type="text"
                name="to"
                placeholder="To"
                onChange={handleInputChange}
                value={formData.to}
                required
              />
            </Box>
          </Flex>
          <Flex mt={4}>
            <Box flex="1" mr={2}>
              <Input
                type="date"
                name="fromDate"
                placeholder="From Date"
                onChange={handleInputChange}
                value={formData.fromDate}
                required
              />
            </Box>
            <Box flex="1" ml={2}>
              <Input
                type="date"
                name="toDate"
                placeholder="To Date"
                onChange={handleInputChange}
                value={formData.toDate}
                required
              />
            </Box>
          </Flex>
          <Flex mt={4}>
            <Box flex="1" mr={2}>
              <Select
                name="travelVia"
                placeholder="Travel Via"
                onChange={handleInputChange}
                value={formData.travelVia}
                required
              >
                {travelViaOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Box>
            <Box flex="1" ml={2}>
              <Select
                name="adults"
                placeholder="Adults"
                onChange={handleInputChange}
                value={formData.adults}
                required
              >
                {adultOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Box>
            <Box flex="1" ml={2}>
              <Select
                name="children"
                placeholder="Children"
                onChange={handleInputChange}
                value={formData.children}
                required
              >
                {childrenOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Box>
          </Flex>
          <Button mt={4} colorScheme="orange" type="submit">
            Book Now
          </Button>
        </form>
      </Box>
   
  );
}

export default BookForm;