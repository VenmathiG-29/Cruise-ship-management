import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { packagTableeAddAPI } from "../../../Redux/action/package.action";
import { toast } from "react-toastify";

const AddTableModal = ({ id }) => {
  // console.log(id)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [addTable, setaddTable] = useState({
    personSize: "",
    price: "",
    offerPrice: "",
  });

  const handleAdd = (e) => {
    let { name, value } = e.target;
    setaddTable({ ...addTable, [name]: value });
  };

  const handleAddTable = async () => {
    if (
      addTable.personSize !== "" &&
      addTable.price !== "" &&
      addTable.offerPrice !== ""
    ) {
      dispatch(packagTableeAddAPI(id, addTable));

      setaddTable({});
    } else {
      toast.error("Package Table Not Added.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Button
        backgroundColor={"#081839"}
        color={"white"}
        onClick={onOpen}
        _hover={{ backgroundColor: "#081839" }}
        size="sm"
      >
        Add Table
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Table Value</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Person Size</FormLabel>
              <Input
                onChange={handleAdd}
                name="personSize"
                type="number"
                placeholder="Enter the Person Size"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <Input
                onChange={handleAdd}
                name="price"
                type="number"
                placeholder="Enter the Price"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Offer Price</FormLabel>
              <Input
                onChange={handleAdd}
                name="offerPrice"
                type="number"
                placeholder="Enter the Offer Price"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                handleAddTable();
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Add Table
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddTableModal;
