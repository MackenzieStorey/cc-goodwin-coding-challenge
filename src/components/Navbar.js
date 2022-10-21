import React from 'react';
import {
    Box,
    Flex,
    Image,
    useDisclosure,
    Center,
    IconButton,
    useBreakpointValue,
    Spacer,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter
} from '@chakra-ui/react';
import { AiOutlineMenu } from "react-icons/ai";
import NavButton from './NavButton';
import { useStyle } from './NavbarStyles';
import aboutUsOptions from '../config/aboutUsOptions.json'
import servicesOptions from '../config/servicesOptions.json'
import logo from '../logo.svg';

const Navbar = props => {
    const mobileNav = useDisclosure();
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const {
        navbar,
        containerBackground,
        logoMain, 
        menuButton, 
        mainContainer, 
        closeButton, 
        contentContainer 
    } = useStyle();
    const navButtons = () => {
        if (isDesktop) {
            mobileNav.isOpen = false;
        }
        return (
            <>
                <NavButton isMobile={!isDesktop} aria-label="home" text="Home" />
                <NavButton isMobile={!isDesktop} aria-label="about us menu" text="About Us" isMenu={true} menuOptions={aboutUsOptions} />
                <NavButton isMobile={!isDesktop} aria-label="services menu" text="Our Services" isMenu={true} menuOptions={servicesOptions} />
                <NavButton isMobile={!isDesktop} aria-label="contact us" text="Contact Us" />
            </>
        )
    }

    return (
        <Box css={mainContainer}>
            <Center>
                <Box css={contentContainer}>
                    <Flex css={navbar} shadow="xl" >
                        <Image css={logoMain} src={logo} alt="logo ipsum" />
                        {isDesktop ? navButtons() : (
                            <>
                                <Spacer />
                                <IconButton
                                    display={!mobileNav.isOpen ? "flex" : "none"}
                                    aria-label="Open menu"
                                    css={menuButton}
                                    variant="ghost"
                                    icon={<AiOutlineMenu />}
                                    onClick={mobileNav.onOpen}
                                />
                            </>
                        )}
                    </Flex>
                    {/* I would have liked to have the mobile drawer in its own component 
                file. You might see the file in the commit history. I ran into some troubles 
                getting it to work and was running out of time, so I 
                left it as is. This would definitely be a TODO */}
                    <Drawer
                        isOpen={mobileNav.isOpen}
                        placement='top'
                        onClose={mobileNav.onClose}
                        size="md"
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton css={closeButton} />
                            <DrawerBody css={containerBackground}>
                                <Flex direction="column" alignItems="center">
                                    {navButtons()}
                                </Flex>
                            </DrawerBody>
                            <DrawerFooter css={containerBackground}>
                                <Image flex="1" rounded="lg" src={logo} alt="logo ipsum" />
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Center>
        </Box>
    )
}

export default Navbar;