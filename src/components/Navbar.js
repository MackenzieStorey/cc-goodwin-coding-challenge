import React from 'react';
import { Box, Flex, Image, useDisclosure, Center } from '@chakra-ui/react';
import NavButton from './NavButton';
import aboutUsOptions from '../config/aboutUsOptions.json'
import servicesOptions from '../config/servicesOptions.json'
import logo from '../logo.svg';

const Navbar = props => { 
    const mobileNav = useDisclosure();

    console.log(mobileNav)
    return (
        <Box minH="100vh" maxW="100vw" bg="#E8E9EB">
            <Center>
                <Flex 
                pl="18px" 
                pr="18px" 
                pt="10px" 
                pb="10px" 
                shadow="xl" 
                w="full" 
                bg="#E0DFD5"
                alignItems="center" 
                alignSelf="center" 
                maxW="1280px" 
                gap="10px"
                roundedBottom="md"
                borderBottom="1px"
                borderLeft="1px"
                borderRight="1px"
                borderColor="#5924ce"
                >
                    <Image pl="10px" bg="#E0DFD5" rounded="lg" src={logo} pr="0.5rem" alt="logo ipsum"/>
                    <NavButton text="Home" />
                    <NavButton text="About Us" isMenu={true} menuOptions={aboutUsOptions}/>
                    <NavButton text="Our Services" isMenu={true} menuOptions={servicesOptions}/>
                    <NavButton text="Contact Us" />
                </Flex>
            </Center>
        </Box>
    )
}
 
export default Navbar;