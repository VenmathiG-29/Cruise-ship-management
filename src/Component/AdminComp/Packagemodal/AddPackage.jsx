import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { packageADDAPI } from "../../../Redux/action/package.action";
import { toast } from "react-toastify";

const AddPackage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const dispatch = useDispatch();
  const [add, setAdd] = useState({
    heading1: "",
    packageName: "",
    sailingDate: "",
    rating: "",
    availability: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setAdd({ ...add, [name]: value });
  };

  const handleAddPackage = async () => {
    if (
      add.heading1 !== "" &&
      add.packageName !== "" &&
      add.sailingDate !== "" &&
      add.rating !== "" &&
      add.availability !== ""
    ) {
      dispatch(packageADDAPI(add));

      setAdd({});
      onClose();
    } else {
      toast.error("Package Not Added.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<AiFillPlusSquare />}
        background="#F1CC5C"
        borderRadius="5px"
        fontWeight="700"
        size={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
        fontSize={{
          base: "10px",
          sm: "12px",
          md: "14px",
          lg: "14px",
        }}
        lineHeight="15px"
        color="#081839"
      >
        Add New
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md", "xl", "2xl"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Package</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack flexDirection={["column", "column", "row"]}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="heading1"
                  value={add.heading1}
                  type="text"
                  placeholder="e.g. Lorem"
                  height={"50px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt={[2, 2, 0, 0]}>PackageName</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="packageName"
                  value={add.packageName}
                  type="text"
                  placeholder="e.g. Ispum"
                  height={"50px"}
                />
              </FormControl>
            </HStack>
            <HStack flexDirection={["column", "column", "row"]}>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2]}>SailingDate</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="sailingDate"
                  value={add.sailingDate}
                  type="date"
                  placeholder="e.g. Lorem Ispum12@gmail.com"
                  height={"50px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel mt={[2, 2, 2, 2]}>Rating</FormLabel>
                <Input
                  onChange={handleAdd}
                  name="rating"
                  value={add.rating}
                  type="number"
                  placeholder="e.g. number"
                  height={"50px"}
                />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel mt={[2, 2, 2, 2]}>Availability</FormLabel>
              <Input
                onChange={handleAdd}
                name="availability"
                value={add.availability || ""}
                type="number"
                placeholder="e.g. number"
                height={"50px"}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              backgroundColor={"#081839"}
              color={"white"}
              mr={3}
              onClick={onClose}
              _hover={{ backgroundColor: "#081839" }}
            >
              Close
            </Button>
            <Button
              _hover={{ backgroundColor: "#081839" }}
              backgroundColor={"#081839"}
              color={"white"}
              mr={3}
              onClick={() => {
                handleAddPackage();
                onClose();
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPackage;
