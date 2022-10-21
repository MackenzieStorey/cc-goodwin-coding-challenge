import React, { createRef, useRef } from 'react';
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Center
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useStyle } from './NavButtonStyles';

const NavButton = props => {
    const { menuList, menuButton, linkText, linkButton } = useStyle(props.isMobile);
    const elementsRef = useRef(props.menuOptions?.map(() => createRef()));

    // I wanted to do this more gracefully, but this is a solution that works for now.
    // Take a stored ref to the child text to change its color specifically for browsing with a keyboard.
    const onMenuFocus = index => {
        elementsRef.current[index].style.color = "#5924ce";
        elementsRef.current[index].style.textDecoration = "underline"
    }

    const onMenuBlur = index => {
        elementsRef.current[index].style.color = "#3f66cd";
        elementsRef.current[index].style.textDecoration = "none"
    }

    /* I could have hard-coded the options, but this allows a re-useable function to build it dynamically.
    * If the customer wanted to add extra links to pages after the fact, all we need to do is add the new link
    * to the options JSON. */
    const buildMenuOptions = (menuOptions) => {
        return menuOptions.map((option, index) => {
            return (
                <MenuItem
                    _hover={{ bgColor: "#f0efe4" }}
                    _focus={{ bgColor: "#f0efe4" }}
                    onFocus={() => onMenuFocus(index)}
                    onBlur={() => onMenuBlur(index)}
                    onClick={() => window.open(option.link)}
                    aria-label={option.text}
                    key={`${option.text}-${index}`}>
                    <Text 
                    css={linkText} 
                    ref={el => (elementsRef.current[index] = el)}
                    aria-label={`${option.text} link`}>
                        {option.text}
                    </Text>

                </MenuItem>
            )
        });
    }
    if (props.isMenu) {
        return (
            <Menu>
                <MenuButton
                    as={Button}
                    variant="none"
                    aria-label={`${props.text} menu`}
                    css={menuButton}
                    rightIcon={<ChevronDownIcon alt="down" />}
                >
                    {props.text}
                </MenuButton>
                <MenuList css={menuList}>
                    {buildMenuOptions(props.menuOptions)}
                </MenuList>
            </Menu>
        )
    }
    return (
        <Button
            variant="none"
            css={linkButton}
            aria-label={`${props.text} link`}
            onClick={() => window.open("https://ccgoodwin.ca")}
        >{props.text}</Button>
    )
}

export default NavButton;