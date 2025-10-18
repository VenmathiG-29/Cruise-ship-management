import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { DeltePackageTableApi } from "../../../Redux/action/package.action";

const DeleteTableModal = ({ packageId, tableid }) => {
  // console.log(packageId, tableid);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();

  const handledeletetable = () => {
    dispatch(DeltePackageTableApi(packageId, tableid));
  };

  return (
    <>
      <Button colorScheme="#fff" onClick={onOpen}>
        <AiFillDelete fontSize="20px" color="#dc3544" />
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
              Are you sure? You want to delete this Table.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handledeletetable} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default DeleteTableModal;
