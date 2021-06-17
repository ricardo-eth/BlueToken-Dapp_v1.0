import { useContext } from "react";
import { Web3Context } from "web3-hooks";

import { HStack, Box } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const MetaMaskInfo = () => {
  const [web3State] = useContext(Web3Context);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{web3State.account}</ModalBody>

          <ModalFooter>
            <Link href="https://chakra-ui.com" isExternal>
              Chakra Design system <ExternalLinkIcon mx="2px" />
            </Link>
            <Button>Log out</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <HStack spacing="24px">
        <Button onClick={onOpen}>
          {web3State.account?.slice(0, 6) +
            "..." +
            web3State.account?.slice(-4)}
        </Button>

        <Box>{web3State.balance} ETH</Box>
        <Box>{web3State.networkName}</Box>
      </HStack>
    </>
  );
};

export default MetaMaskInfo;
