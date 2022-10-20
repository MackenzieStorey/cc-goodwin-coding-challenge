import React from 'react';
import { Box, Flex, Image, useDisclosure, Spacer } from '@chakra-ui/react';
import { NavButton } from './NavButton';
import logo from '../logo.svg';

export function Navbar() { 
    const mobileNav = useDisclosure();

    console.log(mobileNav)
    return (
        <Box minH="100vh" maxW="1280px" bg="#E8E9EB" alignSelf="center">
            <Flex pl="18px" pr="18px" pt="10px" pb="10px" shadow="md" w="full" bg="#E0DFD5" alignItems="center">
                <Image src={logo} pr="0.5rem"/>
                <NavButton text="Home" />
                <NavButton text="About Us" />
                <NavButton text="Our Services" />
                <NavButton text="Contact Us" />
            </Flex>
        </Box>
    )
}

export default Navbar;
 