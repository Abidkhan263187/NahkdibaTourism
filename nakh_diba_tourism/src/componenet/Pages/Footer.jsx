import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import './style.css'

export const Footer = () => {
    return (
        <Box id="footer_main">

            <Box id="footer_fst">
                <Box>
                    <Heading size="md" mb={'10px'}>About Us</Heading>
                    <Text>Welcome to Travelena, where our passion for travel and
                        commitment to unforgettable experiences come together.
                        Explore the world with us and let's make your travel dreams a reality</Text>
                </Box>

                <Box>
                    <Heading id="footer_haed" size="md" mb={'10px'}>Branch Locations</Heading>
                    <Box>
                        <ul>
                            <a href='#'><li>India</li></a>
                            <a href='#'><li>USA</li></a>
                            <a href='#'><li>Japan</li></a>
                            <a href='#'><li>Australia</li></a>
                            <a href='#'><li>Saudi</li></a>
                            <a href='#'><li>Spain</li></a>
                        </ul>
                    </Box>
                </Box>


                <Box>
                    <Heading size="md" mb={'10px'}>Quick Links</Heading>
                    <Box>
                        <ul>
                            <a href='#'><li>Home</li></a>
                            <a href='#'><li>Contact</li></a>
                            <a href='#'><li>About Us</li></a>
                            <a href='#'><li>Register</li></a>
                            <a href='#'><li>Packages</li></a>
                            <a href='#'><li>Gallery</li></a>
                        </ul>
                    </Box>
                </Box>

                <Box>
                    <Heading size="md" mb={'10px'}>Follow Us</Heading>
                    <Box id="social_box">
                        <Flex id="social_media">
                           <Box backgroundColor={'white'} w={'max-content'} height={'20px'}> <i style={{ color: "#0a66c2"}} className="fa-brands fa-linkedin fa-xl"></i></Box>
                            <Link  to="https://www.linkedin.com/in/abid-khan-325795182/">Linkedln</Link>
                        </Flex>
                        <Flex id="social_media">
                            <i style={{ color: "red" }} className="fa-brands fa-instagram fa-lg"></i>
                            <Link to="https://www.instagram.com/_abidkhann/" ml={'0px'}> Instagram</Link>
                        </Flex>
                        <Flex id="social_media">
                        <i className="fa-brands fa-x-twitter"></i>
                            <Link to="https://twitter.com/khan_abid_">Twitter</Link>
                        </Flex>
                        <Flex id="social_media">
                            <i style={{ color: "1178e7" }} className="fa-brands fa-facebook fa-lg"></i>
                            <Link to="#">Facebook</Link>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <Box id="footer_scnd" mb={'10px'}>
                <Box>
                    <Heading size="md" mb={'10px'} >Contacts</Heading>
                    <Text><i style={{ color: "lightblue" }} className="fa-solid fa-envelope fa-lg"></i>&nbsp; abidkhan2631871@gmail.com</Text>
                    <Text> <i style={{ color: "lightblue" }} className="fa-solid fa-phone fa-lg"></i>&nbsp; +91-62-8000-7521</Text>
                    <Text> <i style={{ color: "green" }} className="fa-solid fa-clock fa-lg"></i>&nbsp; 24x7</Text>
                </Box>
            </Box>
            <Box id="footer_thrd">
                <p>🎨Created and designed by Abid Khan &copy; 2023. All Rights Reserved. 📝</p>
            </Box>
        </Box>
    )
}
