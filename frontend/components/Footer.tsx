'use client';

import { Flex, Text, Box } from "@chakra-ui/react";
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
        justifyContent="center"
        alignItems="center"
        backgroundColor="black"
        height="200px"
    >
        <Text> Paint </Text>
        <Box mr="2rem"><FaDiscord fontSize="2rem" color="#B197FC" /></Box>
        <Box mr="2rem"><FaTwitter fontSize="2rem" color="#74C0FC" /></Box>
        <Box mr="2rem"><FaYoutube fontSize="2rem" color="#dd2727" /></Box>
    </Flex>
  )
}

export default Footer
