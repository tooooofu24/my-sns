import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaCircleCheck } from "react-icons/fa6";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex justifyContent="center" p={5}>
            <Text
              style={{
                fontSize: "5rem",
              }}
              color="green.500"
            >
              <FaCircleCheck />
            </Text>
          </Flex>
          <Text>
            コメントを投稿しました！
            <br />
            ページに反映されるまで3~5分程度時間がかります。
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
