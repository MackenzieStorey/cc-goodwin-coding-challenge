import React, { createRef, useRef } from 'react';
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useStyle } from './NavButtonStyles';

const NavButton = props => {
    const { menuList, menuButton, linkText, linkButton } = useStyle(props.isMobile);
    const elementsRef = useRef(props.menuOptions?.map(() => createRef()));

    const onMenuFocus = index => {
       elementsRef.current[index].style.color = "#5924ce";
    }

    const onMenuLeave = index => {
        elementsRef.current[index].style.color = "#3f66cd";
    }

    const buildMenuOptions = (menuOptions) => {
        return menuOptions.map((option, index) => {
            return (
                <MenuItem
                    _hover={{ bgColor: "#f0efe4" }}
                    _focus={{ bgColor: "#f0efe4" }}
                    onFocus={() => onMenuFocus(index)}
                    onBlur={() => onMenuLeave(index)}
                    onClick={() => window.open(option.link)}
                    key={`${option.text}-${index}`}>
                    <Text css={linkText} ref={el => (elementsRef.current[index] = el)}>
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
            onClick={() => window.open("https://ccgoodwin.ca")}
        >{props.text}</Button>
    )
}

export default NavButton;