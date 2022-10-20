import React, { useState } from 'react';
import { 
    Button, 
    Menu, 
    MenuButton,
    MenuList,
    MenuItem,
    Text
 } from '@chakra-ui/react';
 import { ChevronDownIcon } from '@chakra-ui/icons'

const NavButton = props => {
    const onMenuFocus = index => {
        console.log(index);
    }

    const buildMenuOptions = (menuOptions) => {
        return menuOptions.map((option, index) => {
            const textRef = React.createRef();
            return (
                <MenuItem 
                _hover={{bgColor: "#f0efe4"}} 
                _focus={{bgColor: "#f0efe4"}}
                onFocus={() => onMenuFocus(index)}
                onClick={() => window.open(option.link)}>
                    <Text isExternal
                        textColor="#333333"
                        fontSize="18px"
                        _hover={
                            {
                                textColor: "#3f66cd",
                                bgColor: "#f0efe4"
                            }
                        }
                        _focus={
                            {
                                textColor: "#3f66cd",
                                bgColor: "#f0efe4"
                            }
                        }
                    >
                        {option.text}
                    </Text>
                </MenuItem>
            )
        });
    }

    // ran into rendering issues with props being undefined.
    // ensuring props is populated negates a rendering error.
    if (props) {
        if (props.isMenu) {
            return (
                <Menu>
                   <MenuButton 
                   as={Button} 
                   variant="none"
                   fontSize="18px"
                   textColor="#333333"
                   _hover={
                    {
                        textColor: "#696969",
                        bgColor: "#f0efe4"
                    }
                } 
                   rightIcon={<ChevronDownIcon alt="down"/>}
                   >{props.text}</MenuButton>
                   <MenuList bg="#E0DFD5" border="none" borderBottom="1px" borderLeft="1px" borderRight="1px" borderColor="#5924ce">
                    {buildMenuOptions(props.menuOptions)}
                   </MenuList>
                </Menu>
            )
        }
        return (
            <Button 
            variant="none" 
            textColor="#333333"
            fontSize="18px"
            borderColor="#5924ce"
            _hover={
                {
                    textColor: "#3f66cd",
                    bgColor: "#f0efe4"
                }
            }
            _focus={
                {
                    textColor: "#3f66cd",
                    bgColor: "#f0efe4"
                }
            }
            onClick={() => window.open("https://ccgoodwin.ca")}
            >{props.text}</Button>
        )
    }
}

export default NavButton;