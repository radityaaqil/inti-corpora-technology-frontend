import Link from "next/link";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const DetailDataList = ({ id, userId, title, body, deleteData }) => {
  //Delete confirmation modal hook
  const { isOpen, onOpen, onClose } = useDisclosure();

  //Delete Data and page routing
  const router = useRouter();
  const confirmDeletion = (id) => {
    deleteData(id);
    onClose();
    router.push("/");
  };

  return (
    <div className="w-[240px] md:w-[600px] lg:w-[1000px] mx-auto">
      <div className="mx-auto w-[240px] md:w-[600px] lg:w-[1000px] text-center mt-10 mb-2 text-xl font-bold">
        Detail Data
      </div>
      <div className="w-[240px] md:w-[600px] lg:w-[1000px] mx-auto border-2 border-black">
        <div className="flex items-center gap-1 border-b-2 border-black">
          <div className="w-[65px] md:w-[130px] p-1">ID</div>
          <div className="w-[175px] md:w-[350px] p-1 border-l-2 border-black">
            {id}
          </div>
        </div>
        <div className="flex items-center gap-1 bg-gray-400 border-b-2 border-black">
          <div className="w-[65px] md:w-[130px] p-1">User ID</div>
          <div className="w-[175px] md:w-[350px] p-1 border-l-2 border-black">
            {userId}
          </div>
        </div>
        <div className="flex items-center gap-1 border-b-2 border-black">
          <div className="w-[65px] md:w-[130px] p-1">Title</div>
          <div className="w-[175px] md:w-[420px] lg:w-[850px] p-1 text-justify border-l-2 border-black">
            {title}
          </div>
        </div>
        <div className="flex items-center gap-1 bg-gray-400">
          <div className="w-[65px] md:w-[130px] p-1">Body</div>
          <div className="w-[175px] md:w-[420px] lg:w-[850px] p-1 text-justify border-l-2 border-black">
            {body}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-2">
        <Link href={`/editData/${id}`}>
          <button className="px-2 py-2 border-2 border-black rounded-lg hover:bg-gray-400">
            Edit
          </button>
        </Link>

        <button
          onClick={onOpen}
          className="px-2 py-2 border-2 border-black rounded-lg hover:bg-gray-400"
        >
          Delete
        </button>
        <Link href={`/`}>
          <button className="px-2 py-2 border-2 border-black rounded-lg hover:bg-gray-400">
            Home
          </button>
        </Link>
      </div>

      {/* Confrim Reject Transaction Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>Are you sure? There is no going back!</div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={confirmDeletion}>Yes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DetailDataList;
