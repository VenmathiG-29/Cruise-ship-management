import {
  Button,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Input,
  HStack,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userEditAPI } from "../../../Redux/action/user.action";

const EditProfileModal = (user) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [info, setinfo] = useState(user);
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinfo({ ...info, [name]: value });
  };
  const dispatch = useDispatch();
  const getEditUser = () => {
    dispatch(userEditAPI(info._id, { ...info }));
    toast({
      description: "Profile Updated Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top-center",
    });
    onClose();
  };
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<FaEdit />}
        colorScheme="yellow"
        borderRadius="5px"
        fontWeight="700"
        fontSize="14px"
        size={{ base: "sm", sm: "sm", md: "md", lg: "md" }}
      >
        Edit Profile
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={["sm", "md", "xl", "xl", "2xl"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={info.firstName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel mt={[2, 2, 2, 0, 0]}>Last name</FormLabel>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={info.lastName}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl mt={[2, 2, 2, 2, 2]}>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={info.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Mobile Number</FormLabel>
                <Input
                  name="mobilenumber"
                  type="number"
                  placeholder="Mobile Number"
                  value={info.mobilenumber}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Gender</FormLabel>
                <Select
                  name="gender"
                  placeholder="Gender"
                  value={info.gender}
                  onChange={handleChange}
                >
                  <option value="Gender">Gender</option>
                  <option value="Male">male</option>
                  <option value="Female">female</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Date of Birth</FormLabel>
                <Input
                  name="dateofbirth"
                  type="date"
                  placeholder="Date of Birth"
                  value={info.dateofbirth}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>

            <HStack flexDirection={["column", "column", "column", "row"]}>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2, 2]}>Address</FormLabel>
                <Input
                  name="address"
                  type="text"
                  placeholder="Address"
                  value={info.address}
                  onChange={handleChange}
                />
              </FormControl>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={getEditUser}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfileModal;
