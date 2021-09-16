import React, { useState, useRef } from "react";
import axios from "axios";
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
  Button,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import DrawerEdit from "../DrawerEdit/DrawerEdit";

export default function TableWithEdit({ users }) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUserID, setCurrentUserID] = useState(null);
  const [deletedIds, setDeletedIds] = useState([0]);
  const onAlertClose = () => setIsAlertOpen(false);
  const cancelRef = useRef();
  const firstField = useRef();
  const header = ["name", "surname", "url", "email", "password", "id"];
  const tableBgValue = useColorModeValue("white", "gray.800");
  const firstTdColorValue = useColorModeValue("gray.400", "gray.400");
  const secondTdColorValue = useColorModeValue("gray.500");
  const thirdTdColorValue = useColorModeValue("gray.400", "gray.400");
  const filteredUsers = users.filter((us) => !deletedIds.includes(us.id));

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    const cDeletedIds = [...deletedIds];
    cDeletedIds.push(id);
    setDeletedIds(cDeletedIds);
  };
  console.log("USERRRRRRRRRRRRRRRRRRRRR", user);
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
                        onClick={() => {
                          setUser(users.find((user) => user.id === token.id));
                        }}
                      />
                      {user && (
                        <DrawerEdit
                          user={user}
                          firstField={firstField}
                          onClose={() => setUser(null)}
                        />
                      )}
                    </>
                    <>
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<BsFillTrashFill />}
                        onClick={() => {
                          setIsAlertOpen(true);
                          setCurrentUserID(token.id);
                        }}
                      />
                      <AlertDialog
                        isOpen={isAlertOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onAlertClose}
                      >
                        <AlertDialogContent>
                          <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete User
                          </AlertDialogHeader>

                          <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                          </AlertDialogBody>

                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onAlertClose}>
                              Cancel
                            </Button>
                            <Button
                              colorScheme="red"
                              onClick={() => {
                                handleDelete(currentUserID);
                                onAlertClose();
                              }}
                              ml={3}
                            >
                              Delete
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
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
