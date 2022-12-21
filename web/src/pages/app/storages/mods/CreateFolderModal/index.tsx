import { useForm } from "react-hook-form";
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
  VStack,
} from "@chakra-ui/react";
import { t } from "i18next";

function CreateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, setFocus, handleSubmit } = useForm<{ name: string }>();

  return (
    <>
      <Button
        size="xs"
        onClick={() => {
          onOpen();
          setTimeout(() => {
            setFocus("name");
          }, 0);
        }}
      >
        新建文件夹
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Folder</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <VStack spacing={6} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="name">文件夹名称</FormLabel>
                <Input
                  {...register("name", {
                    required: true,
                  })}
                  variant="filled"
                />
              </FormControl>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              {t("Common.Dialog.Cancel")}
            </Button>
            <Button
              colorScheme="primary"
              type="submit"
              onClick={handleSubmit(() => {
                console.log("submit");
              })}
            >
              {t("Common.Dialog.Confirm")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateModal;