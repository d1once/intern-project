import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Hello&nbsp;
            <Text as={"span"} color={"green.400"}>
              Dionis
            </Text>{" "}
            here 👋
            <br />
          </Heading>

          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Link to="/signup">
              <Button
                size="lg"
                colorScheme={"green"}
                bg={"green.400"}
                rounded={"full"}
                px={6}
                _hover={{
                  bg: "green.500",
                }}
              >
                Get Started
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
