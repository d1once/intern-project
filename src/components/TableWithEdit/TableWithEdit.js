import React, { useState, useRef } from "react";
import {
  Flex,
  useColorModeValue,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";

export default function TableWithEdit({ users }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const onAlertClose = () => setIsAlertOpen(false);
  const cancelRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const header = ["name", "surname", "url", "email", "password", "id"];
  const tableBgValue = useColorModeValue("white", "gray.800");
  const firstTdColorValue = useColorModeValue("gray.400", "gray.400");
  const secondTdColorValue = useColorModeValue("gray.500");
  const thirdTdColorValue = useColorModeValue("gray.400", "gray.400");
  const filteredUsers = users.filter((us) => us.id !== 0);
  return (
    <Flex
      w="full"
      bg="gray.600"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Table
        w="full"
        bg={tableBgValue}
        display={{
          base: "block",
          md: "table",
        }}
        sx={{
          "@media print": {
            display: "table",
          },
        }}
      >
        <Thead
          display={{
            base: "none",
            md: "table-header-group",
          }}
          sx={{
            "@media print": {
              display: "table-header-group",
            },
          }}
        >
          <Tr>
            {header.map((x) => (
              <Th key={x}>{x}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          display={{
            base: "block",
            lg: "table-row-group",
          }}
          sx={{
            "@media print": {
              display: "table-row-group",
            },
          }}
        >
          {filteredUsers.map((token, tid) => {
            return (
              <Tr
                key={tid}
                display={{
                  base: "grid",
                  md: "table-row",
                }}
                sx={{
                  "@media print": {
                    display: "table-row",
                  },
                  gridTemplateColumns: "minmax(0px, 35%) minmax(0px, 65%)",
                  gridGap: "10px",
                }}
              >
                {Object.keys(token).map((x) => {
                  return (
                    <React.Fragment key={`${tid}${x}`}>
                      <Td
                        display={{
                          base: "table-cell",
                          md: "none",
                        }}
                        sx={{
                          "@media print": {
                            display: "none",
                          },
                          textTransform: "uppercase",
                          color: { firstTdColorValue },
                          fontSize: "xs",
                          fontWeight: "bold",
                          letterSpacing: "wider",
                          fontFamily: "heading",
                        }}
                      >
                        {x}
                      </Td>
                      <Td
                        color={secondTdColorValue}
                        fontSize="md"
                        fontWeight="hairline"
                      >
                        {token[x]}
                      </Td>
                    </React.Fragment>
                  );
                })}
                <Td
                  display={{
                    base: "table-cell",
                    md: "none",
                  }}
                  sx={{
                    "@media print": {
                      display: "none",
                    },
                    textTransform: "uppercase",
                    color: { thirdTdColorValue },
                    fontSize: "xs",
                    fontWeight: "bold",
                    letterSpacing: "wider",
                    fontFamily: "heading",
                  }}
                >
                  Actions
                </Td>
                <Td>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                    />
                    <>
                      <IconButton
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        onClick={onOpen}
                      />
                      <Drawer
                        isOpen={isOpen}
                        placement="right"
                        initialFocusRef={firstField}
                        onClose={onClose}
                        size="sm"
                      >
                        <DrawerOverlay />
                        <DrawerContent>
                          <DrawerCloseButton />
                          <DrawerHeader borderBottomWidth="1px">
                            Edit Current User
                          </DrawerHeader>

                          <DrawerBody>
                            <Stack spacing="24px">
                              <Box>
                                <FormLabel htmlFor="firstname">
                                  Firstname
                                </FormLabel>
                                <Input
                                  ref={firstField}
                                  id="firstname"
                                  placeholder="Please enter user firstname"
                                />
                              </Box>
                              <Box>
                                <FormLabel htmlFor="lastname">
                                  Lastname
                                </FormLabel>
                                <Input
                                  id="lastname"
                                  placeholder="Please enter user lastname"
                                />
                              </Box>
                              <Box>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                  id="email"
                                  placeholder="Please enter user email"
                                />
                              </Box>

                              <Box>
                                <FormLabel htmlFor="url">Url</FormLabel>
                                <InputGroup>
                                  <InputLeftAddon>https://</InputLeftAddon>
                                  <Input
                                    type="url"
                                    id="url"
                                    placeholder="Please enter domain"
                                  />
                                </InputGroup>
                              </Box>
                            </Stack>
                          </DrawerBody>

                          <DrawerFooter borderTopWidth="1px">
                            <Button variant="outline" mr={3} onClick={onClose}>
                              Cancel
                            </Button>
                            <Button colorScheme="blue">Submit</Button>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                    </>
                    <>
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<BsFillTrashFill />}
                        onClick={() => setIsAlertOpen(true)}
                      />
                      <AlertDialog
                        isOpen={isAlertOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onAlertClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Delete User
                            </AlertDialogHeader>

                            <AlertDialogBody>
                              Are you sure? You can't undo this action
                              afterwards.
                            </AlertDialogBody>

                            <AlertDialogFooter>
                              <Button ref={cancelRef} onClick={onAlertClose}>
                                Cancel
                              </Button>
                              <Button
                                colorScheme="red"
                                onClick={onAlertClose}
                                ml={3}
                              >
                                Delete
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                    </>
                  </ButtonGroup>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
}
