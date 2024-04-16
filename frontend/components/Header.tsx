import React from 'react';
import { Flex, Box } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { redirect } from 'next/dist/server/api-utils';

const Header = () => {

  return (



    <Flex
        justifyContent="space-between"
        alignItems="center"
        height="100px"
        backgroundColor= "#2b5e97"
        padding="20px"
    >
        <img src="/img/logo.png" width="120px"/>

        <Box><ConnectButton/></Box>
    </Flex>

  )
}

export default Header;