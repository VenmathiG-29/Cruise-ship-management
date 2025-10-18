import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { DeltePackageApi } from "../../../Redux/action/package.action";

const DeletePackageModal = ({ id, packName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(DeltePackageApi(`${id}`));

    onClose();
  };

  return (
    <>
      <Button colorScheme="#fff" onClick={onOpen}>
        <AiFillDelete cursor={"pointer"} fontSize={"22px"} color="#dc3544" />
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Package
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You want to delete{" "}
              <Text as="span" fontWeight={"500"} textTransform="capitalize">
                {" "}
                {packName}{" "}
              </Text>
              .
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeletePackageModal;
