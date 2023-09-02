import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const SectionFour = () => {
    return (
        <Box id="sectionFour_container">
            <Heading>Popular Destination</Heading>
            <Box padding={"40px"}>
                <Grid
                    id="sectionFour_grid"
                    h='400px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} className='custom-grid-item'>
                        <div className="grid-item-content">
                            <img src="https://images.pexels.com/photos/2383832/pexels-photo-2383832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image 1" />
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', top: 4, left: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>20% off</Text>
                            </div>
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', bottom: 4, right: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>Lahore</Text>
                            </div>
                        </div>

                    </GridItem>
                    <GridItem colSpan={2} className='custom-grid-item'>
                        <div className="grid-item-content">

                            <img src="https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?w=2000" alt="Image 2" />
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', top: 4, left: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>50% off</Text>
                            </div>
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', bottom: 4, right: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>Thailand</Text>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem colSpan={2} className='custom-grid-item'>
                        <div className="grid-item-content">
                            <img src="https://a.storyblok.com/f/95452/2470x1638/1eecf21d1e/zambia-victoria-falls-aerial.jpg/m/1600x900" alt="Image 3" />
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', top: 4, left: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>40% off</Text>
                            </div>
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', bottom: 4, right: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>Zambia</Text>
                            </div>
                        </div>
                    </GridItem>
                    <GridItem colSpan={4} className='custom-grid-item'>
                        <div className="grid-item-content">

                            <img src="https://media.tacdn.com/media/attractions-content--1x-1/0b/29/04/1f.jpg" alt="Image 4" />
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', top: 4, left: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>25% off</Text>
                            </div>
                            <div style={{ backgroundColor: "white", color: "orange", position: 'absolute', bottom: 4, right: 4, padding: '2px 6px', zIndex: 1000, borderRadius: "5px" }}>
                                <Text fontWeight={'600'} fontSize={'sm'}>London</Text>
                            </div>
                        </div>
                    </GridItem>

                </Grid>
            </Box>
        </Box>
    );
};
