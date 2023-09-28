import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Text,
  Image,
  Heading,
  Button,
  Flex,
} from '@chakra-ui/react';

const ServiceBox = ({ icon, title, description, onClick }) => {
  return (
    <Box id="services_main"  onClick={onClick}>
      <Flex mb={'20px'} alignItems="center" id="service_font"><i className={icon}></i>
        <Heading size="md" color={'blackAlpha.600'} ml={5} mb={2}>
          {title}
        </Heading>
      </Flex>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
};
const packArr = JSON.parse(localStorage.getItem('services')) || []
export const Service = () => {
  const [selectedService, setSelectedService] = useState(packArr);


  const services = [
    {
      icon: 'fa-solid fa-mountain fa-xl',
      title: 'Adventure Tours',
      description: 'Explore exciting adventures in stunning locations.',
    },
    {
      icon: 'fa-solid fa-money-bill-1-wave fa-xl',
      title: 'Luxury Accommodation',
      description: 'Experience top-notch comfort and hospitality.',
    },
    {
      icon: 'fa-solid fa-route fa-xl',
      title: 'Guided Tours',
      description: 'Get expert guidance and explore the best spots.',
    },
    {
      icon: 'fa-solid fa-utensils fa-xl',
      title: 'Food',
      description: 'Savor delicious local cuisine and international dishes.',
    },
    {
      icon: 'fa-solid fa-campground fa-xl',
      title: 'Camping',
      description: 'Camp under the stars in picturesque natural settings.',
    },
    {
      icon: 'fa-solid fa-truck-monster fa-xl',
      title: 'Off-Road',
      description: 'Take on thrilling off-road adventures and rugged terrain.',
    },
  ];


  const handleServiceClick = (title) => { setSelectedService((prev) => [...prev, title]) };

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(selectedService))
  }, [selectedService])

  return (
    <>
      <Heading mt={'50px'}>Add Extra <span style={{ color: "orange" }}>Services</span></Heading>
      <Grid id="extraService_main">
        {services.map((service, index) => (
          <ServiceBox key={index} icon={service.icon} title={service.title} description={service.description}
            onClick={() => handleServiceClick(service.title)}
          />
        ))}
      </Grid>

    </>
  );
};
