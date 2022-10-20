import React from 'react';
import { ChakraProvider, Container, theme, Box } from '@chakra-ui/react';
import { Navbar } from './components/Navbar'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container p="0" maxW="1280px">
        <Navbar />
      </Container>
    </ChakraProvider>
  );
}

export default App;
