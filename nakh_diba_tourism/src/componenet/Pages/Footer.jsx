import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import './style.css'

export const Footer = () => {
    return (
        <Box id="footer_main">

            <Box id="footer_fst">
                <Box>
                    <Heading size="md" mb={'10px'}>About Us</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ex.</Text>
                </Box>



                <Box>
                    <Heading size="md" mb={'10px'}>Branch Locations</Heading>
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
                            <i style={{ color: "#0a66c2" }} class="fa-brands fa-linkedin fa-lg"></i>
                            <Text as={Link} to="#">Linkedln</Text>
                        </Flex>
                        <Flex id="social_media">
                            <i style={{ color: "red" }} class="fa-brands fa-instagram fa-lg"></i>
                            <Text as={Link} to="#" ml={'0px'}> Instagram</Text>
                        </Flex>
                        <Flex id="social_media">
                            <i style={{ color: "skyblue" }} class="fa-brands fa-twitter fa-lg"></i>
                            <Text as={Link} to="#">Twitter</Text>
                        </Flex>
                        <Flex id="social_media">
                            <i style={{ color: "lightblue" }} class="fa-brands fa-facebook fa-lg"></i>
                            <Text as={Link} to="#">Facebook</Text>
                        </Flex>
                    </Box>
                </Box>
            </Box>
            <Box id="footer_scnd" mb={'10px'}>
                <Box>
                    <Heading size="md" mb={'10px'} >Contacts</Heading>
                    <Text><i style={{ color: "darkyellow" }} class="fa-solid fa-envelope fa-lg"></i>&nbsp; abidkhan2631871@gmail.com</Text>
                    <Text> <i style={{ color: "lightblue" }} class="fa-solid fa-phone fa-lg"></i>&nbsp; +91-62-8000-7521</Text>
                    <Text> <i style={{ color: "green" }} class="fa-solid fa-clock fa-lg"></i>&nbsp; 24x7</Text>
                </Box>
            </Box>
            <Box id="footer_thrd">
                <p>🎨Created and designed by Abid Khan &copy; 2023. All Rights Reserved. 📝</p>
            </Box>
        </Box>
    )
}
