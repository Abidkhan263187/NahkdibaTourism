import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles
import ContinentCard from './ContinentCard';
import { Box, Flex, Heading, Text, border } from '@chakra-ui/react';


const responsive = {
    desktop: {

        breakpoint: { max: 3000, min: 1024 },
        items: 3, // Number of cards to show on desktop
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2, // Number of cards to show on tablet
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1, // Number of cards to show on mobile
    },
};

export const SectionOne = () => {
    return (
        <Flex flexDirection={'column'} gap={5} pl={['10px',"50px"]} pr={['10px','50px']} border={"1px solid"}>
            <Heading size={'lg'}>BEST HOTELS</Heading>
                <Carousel responsive={responsive} >
                    <ContinentCard />
                    <ContinentCard />
                    <ContinentCard />
                    <ContinentCard />
                    <ContinentCard />
                    <ContinentCard />
                    <ContinentCard />
                </Carousel>
        </Flex>
    );
};


