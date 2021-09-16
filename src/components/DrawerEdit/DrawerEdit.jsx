import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Stack,
  Button,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

const DrawerEdit = ({ user, firstField, onClose }) => {
  const [userEdit, setUserEdit] = useState(user);
  const handleChange = (e) => {
    const value = e.target.value;
    setUserEdit({
      ...userEdit,
      [e.target.name]: value,
    });
  };

  return (
    <Drawer
      isOpen
      placement="right"
      initialFocusRef={firstField}
      onClose={onClose}
      size="sm"
    >
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Edit Current User</DrawerHeader>

        <DrawerBody>
          <Stack spacing="24px">
            <Box>
              <FormLabel htmlFor="firstname">Firstname</FormLabel>
              <Input
                ref={firstField}
                id="firstname"
                placeholder="Please enter user firstname"
                value={userEdit?.firstname}
                name="firstname"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="lastname">Lastname</FormLabel>
              <Input
                id="lastname"
                placeholder="Please enter user lastname"
                value={userEdit?.lastname}
                name="lastname"
                onChange={handleChange}
              />
            </Box>
            <Box>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Please enter user email"
                value={userEdit?.email}
                name="email"
                onChange={handleChange}
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
                  value={userEdit?.photoURL}
                  name="photoUR"
                  onChange={handleChange}
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
  );
};

export default DrawerEdit;
