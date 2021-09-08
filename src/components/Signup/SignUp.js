import {useState} from "react"


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

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setlastName] = useState("")
  // const [photoURL, setPhotoURL] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    photoURL: "",
    email: "",
    password: "",
  })
  const {firstName, lastName, photoURL, email, password} = state

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }
  

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
              <Input type="text"  placeholder="John" value={firstName} name="firstName" onChange={handleChange} />
            </FormControl>
            <FormControl id="lastname">
              <FormLabel>Lastname</FormLabel>
              <Input type="text" placeholder="Wick" value={lastName} name="lastName" onChange={handleChange} />
            </FormControl>
            <FormControl id="lastname">
              <FormLabel>PhotoURL</FormLabel>
              <Input type="text" placeholder="https://wallpaperaccess.com/full/983569.jpg" value={photoURL} name="photoURL" onChange={handleChange} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="johnwick@killyouwithapen.com" value={email} name="email" onChange={handleChange} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="********" value={password} name="password" onChange={handleChange} />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => console.log(state.firstName)}
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
