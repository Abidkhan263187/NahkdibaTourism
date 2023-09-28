import { Box, Button, Grid, Heading, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FinalReceipt = () => {
    const navigate = useNavigate()
    const [tripdata, setTripdata] = useState({});
    const [services, setServices] = useState([]);
    const [packageData, setPackageData] = useState({});
    const [hotelData, setHotelData] = useState({})

    useEffect(() => {
        try {
            const tripFormData = JSON.parse(localStorage.getItem('tripForm')) || "";
            const packageData = JSON.parse(localStorage.getItem('package')) || "";
            const services = JSON.parse(localStorage.getItem('services')) || "";
            const hotel = JSON.parse(localStorage.getItem('hotel')) || "";

            setTripdata(tripFormData);
            setPackageData(packageData);
            setServices(services);
            setHotelData(hotel)
        } catch (error) {
            console.error('Error parsing data from localStorage:', error);
        }
    }, []);

    const handleBookTrip = () => {
        localStorage.clear();
        navigate('/success')
    }

    return (
        <Box w={["90%" ,"80%", "60%", "50%"]} m={'auto'} >
            <Heading>Review Journey</Heading>
            <Box  m=" 20px auto" display={'grid'} gap={'20px'}>
                <Box
                    boxShadow="md"
                    borderRadius="lg"
                    p={6}
                    background="white"
                    textAlign="left"
                    border="1px solid #ccc"
                >
                    <Heading size="lg" mb={4} textAlign={'center'}>
                        Travel  <span style={{color:"orange"}}>Details</span> 
                    </Heading>
                    {Object.keys(tripdata).length > 0 && (
                        <Box mt={'40px'}>
                            <Text fontSize="xl">
                                <strong>Journey Start From:</strong> {tripdata.from}
                            </Text>
                            <Text fontSize="xl">
                                <strong>Destination:</strong> {tripdata.to}
                            </Text>
                            <Text fontSize="xl">
                                <strong>Start Date:</strong> {tripdata.startDate}
                            </Text>
                            <Text fontSize="xl">
                                <strong>End Date:</strong> {tripdata.endDate}
                            </Text>
                            <Text fontSize="xl">
                                <strong>Adults:</strong> {tripdata.adults}
                            </Text>
                            {tripdata.children && (
                                <Text fontSize="xl">
                                    <strong>Children:</strong> {tripdata.children}
                                </Text>
                            )}
                        </Box>
                    )}
                </Box>

                {services !== '' && services.length> 0 && <Box
                    boxShadow="md"
                    borderRadius="lg"
                    p={6}
                    background="white"
                    textAlign="left"
                    border="1px solid #ccc"
                >
                    <Heading size="lg" mb={4} textAlign={'center'}>
                        Selected <span style={{color:"orange"}}>Services</span>  
                    </Heading>
                    {services.length > 0 && (
                        <ul mt={'40px'}>
                            {services.map((elem, index) => (
                                <Text key={index}>
                                    <Text fontSize="xl">{elem}</Text>
                                </Text>
                            ))}
                        </ul>
                    )}
                </Box>}

                {packageData !== '' && <Box
                   
                    boxShadow="sm"
                    borderRadius="lg"
                    p={6}
                    background="white"
                    textAlign="left"
                    border="1px solid #ccc"
                >
                    <Heading size="lg" mb={4} textAlign={'center'}> Package <span style={{color:"orange"}}>Details</span>    </Heading>
                    {Object.keys(packageData).length > 0 && (
                        <Box mt={'40px'}>
                            <Image src={packageData.photo} m="auto" mb={4} />
                            <Text fontSize="xl">
                                <strong>Location:</strong> {packageData.location}
                            </Text>
                            <Text fontSize="xl">
                                <strong>Price:</strong> {packageData.price}
                            </Text>

                        </Box>
                    )}
                </Box>}
                {hotelData && <Box
                    boxShadow="sm"
                    borderRadius="lg"
                    p={6}
                    background="white"
                    textAlign="left"
                    border="1px solid #ccc"
                >
                    <Heading textAlign={'center'} >Hotel  <span style={{color:"orange"}}>Details</span>  </Heading>
                    {Object.keys(hotelData).length > 0 && (
                        <Box mt={'40px'}>
                            <Image src={hotelData.Image} maxW="100%"  mb={4} />
                            <Text>  <strong>Hotel Name : </strong>{hotelData.HotelName}</Text>
                            <Text> <strong>City Name : </strong>{hotelData.placeName}</Text>
                            <Text> <strong>Room Rent : </strong>{hotelData.PriceRange}</Text>
                            <Text> <strong>Reviews : </strong>{hotelData.Review}</Text>
                        </Box>
                    )}
                </Box>}
            </Box>
            <Button m={'20px auto'} w={'40%'} colorScheme="orange" mt={4} onClick={handleBookTrip}>
                Book trip!
            </Button></Box>
    );
};
