'use client'

import Header from './Header';
import Footer from './Footer';
import { Flex } from '@chakra-ui/react';

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <Flex
        direction="column"
        h="100vh"
        justifyContent="center"
    >
        <Header />
        <Flex
            grow="1"
            padding="2rem"
            justifyContent="center"
            width="100%"
            height="100%"
            backgroundImage="url(/img/test.png)" 
            backgroundSize="cover"
            background-position="bot"
            
        >
            {children}
        </Flex>
            
        <Footer />
    </Flex>
  )
}

export default Layout
