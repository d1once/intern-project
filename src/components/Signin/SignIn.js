import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RDLink } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const [regUser, setRegUser] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  useEffect(() => {
    const getUser = async (email, password) => {
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      setRegUser(response.data);
    };
    getUser(email, password);
  }, [email, password]);
  console.log(regUser[0]);
  const handleSign = () => {
    const { email: regEmail, password: regPassword, id: regId } = regUser[0];
    if (regEmail === email && regPassword === password) {
      history.push(`/dashboard/${regId}`);
    }
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
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSign}
              >
                Sign in
              </Button>
              <Link as={RDLink} to="/signup" color="blue.200" pl="10">
                Don't have an account? Sign up.
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
