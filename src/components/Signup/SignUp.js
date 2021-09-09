import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import cuid from "cuid";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RDLink } from "react-router-dom";

export default function SignIn() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    photoURL: "",
    email: "",
    password: "",
  });
  const { firstname, lastname, photoURL, email, password } = state;
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const newUser = {
    firstname,
    lastname,
    photoURL:
      photoURL === ""
        ? "https://cdn.fakercloud.com/avatars/sydlawrence_128.jpg"
        : photoURL,
    email,
    password,
    id: cuid(),
  };

  const handleClick = async () => {
    await axios.post("http://localhost:3001/users", newUser);
    setState({
      firstname: "",
      lastname: "",
      photoURL: "",
      email: "",
      password: "",
    });
    localStorage.setItem("isAuthenticated", true);
    history.push(`/dashboard/${newUser.id}`);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstname">
              <FormLabel>Firstname</FormLabel>
              <Input
                type="text"
                placeholder="John"
                value={firstname}
                name="firstname"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="lastname">
              <FormLabel>Lastname</FormLabel>
              <Input
                type="text"
                placeholder="Wick"
                value={lastname}
                name="lastname"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="photourl">
              <FormLabel>PhotoURL</FormLabel>
              <Input
                type="text"
                placeholder="https://wallpaperaccess.com/full/983569.jpg"
                value={photoURL}
                name="photoURL"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="johnwick@killyouwithapen.com"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="********"
                value={password}
                name="password"
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleClick}
              >
                Sign up
              </Button>
              <Link as={RDLink} to="/signin" color="blue.200" pl="10">
                Already have an account? Sign in
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
