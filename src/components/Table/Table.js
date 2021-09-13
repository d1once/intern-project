import React, { useState, useRef } from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

export default function Table({ users, isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const stackBgValue = useColorModeValue("white", "gray.800");
  const flexBgValue = useColorModeValue("white", "gray.800");
  const variant = useBreakpointValue({ base: true, md: "0" });
  const simpleGridBgValue = useColorModeValue("gray.100", "gray.700");
  const simpleGridColorValue = useColorModeValue("gray.500");
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: stackBgValue }}
        shadow="lg"
      >
        {users.map((person, pid) => {
          return (
            <Flex
              direction={{ base: "row", md: "column" }}
              bg={flexBgValue}
              key={pid}
            >
              {variant && (
                <SimpleGrid
                  spacingY={3}
                  columns={{ base: 1, md: 3 }}
                  w={{ base: 120, md: "full" }}
                  textTransform="uppercase"
                  bg={simpleGridBgValue}
                  color={simpleGridColorValue}
                  py={{ base: 1, md: 4 }}
                  px={{ base: 2, md: 10 }}
                  fontSize="md"
                  fontWeight="hairline"
                  display="table-header-group"
                ></SimpleGrid>
              )}
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 3 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>
                  {person.firstname} {person.lastname}
                </span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {person.email}
                </chakra.span>
                <Flex justify={{ md: "end" }}>
                  <>
                    <Button colorScheme="red" onClick={() => setIsOpen(true)}>
                      Delete
                    </Button>

                    <AlertDialog
                      isOpen={isOpen}
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                    >
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete User
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onClose} ml={3}>
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack>
    </Flex>
  );
}
