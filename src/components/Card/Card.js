import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Card = ({ firstname, lastname, photoURL, isAdmin }) => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="xs"
        bg={useColorModeValue("white", "gray.800")}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        <Image w="full" h={56} fit="cover" src={photoURL} alt="avatar" />

        <Box py={5} textAlign="center">
          <Link
            display="block"
            fontSize="2xl"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
          >
            {firstname} {lastname}
          </Link>
          <chakra.span
            fontSize="sm"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            {isAdmin}
          </chakra.span>
        </Box>
      </Box>
    </Flex>
  );
};

export default Card;
