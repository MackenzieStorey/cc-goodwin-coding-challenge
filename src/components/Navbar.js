import React from 'react';
import {
    Box,
    Flex,
    Image,
    useDisclosure,
    Center,
    IconButton,
    VStack,
    useBreakpointValue,
    Spacer,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react';
import { AiOutlineMenu } from "react-icons/ai";
import NavButton from './NavButton';
import MobileDrawer from './MobileDrawer';
import { useStyle } from './NavbarStyles';
import aboutUsOptions from '../config/aboutUsOptions.json'
import servicesOptions from '../config/servicesOptions.json'
import logo from '../logo.svg';

const Navbar = props => {
    const mobileNav = useDisclosure();
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const { navbar } = useStyle();
    const navButtons = () => {
        if (isDesktop) {
            mobileNav.isOpen = false;
        }
        return (
            <>
                <NavButton aria-label="home" text="Home" />
                <NavButton aria-label="about us menu" text="About Us" isMenu={true} menuOptions={aboutUsOptions} />
                <NavButton aria-label="services menu" text="Our Services" isMenu={true} menuOptions={servicesOptions} />
                <NavButton aria-label="contact us" text="Contact Us" />
            </>
        )
    }

    return (
        <Box minH="100vh" maxW="100vw" bg="#E8E9EB">
            <Center>
                <Flex css={navbar.desktop} shadow="xl" >
                    <Image pl="10px" bg="#E0DFD5" rounded="lg" src={logo} pr="0.5rem" alt="logo ipsum" />
                    {isDesktop ? navButtons() : (
                        <>
                            <Spacer />
                            <IconButton
                                display={!mobileNav.isOpen ? "flex" : "none"}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="#5924ce"
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                        </>
                    )}
                </Flex>
                <Drawer
                    isOpen={mobileNav.isOpen}
                    placement='right'
                    onClose={mobileNav.onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody bg="#E0DFD5">
                            <VStack>
                                {navButtons()}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Center>
        </Box>
    )
}

export default Navbar;