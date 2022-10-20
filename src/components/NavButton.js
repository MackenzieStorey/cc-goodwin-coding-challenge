import React from 'react';
import { Button, Menu, MenuButton } from '@chakra-ui/react';

export function NavButton() {
    return (
        <Button 
        variant="ghost" 
        pl="5px" pr="5px" 
        textColor="#333333"
        _hover={
            {
                bgColor: "#5924ce",
                textColor: "#E8E9EB"
            }
        }
        >test</Button>
    )
}

export default NavButton();