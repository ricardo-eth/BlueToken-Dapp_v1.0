import { useContext } from "react";
import { Web3Context } from "web3-hooks";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
  Heading,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

const MetaMaskInstalled = () => {
  const [web3State, login] = useContext(Web3Context);

  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <Stack spacing={3}>
        <Heading>Connexion</Heading>

        <Text textAlign="center">MetaMask installed</Text>
        {!web3State.isMetaMask && (
          <>
            <Alert status="error">
              <AlertIcon />
              No-Installed
            </Alert>
          </>
        )}
        {web3State.isMetaMask && (
          <>
            <Alert status="success">
              <AlertIcon />
              Success
            </Alert>
          </>
        )}
        <Text textAlign="center">Web3</Text>
        {!web3State.isWeb3 && (
          <>
            <Alert status="warning">
              <AlertIcon />
              No-Injected
            </Alert>
          </>
        )}
        {web3State.isWeb3 && (
          <>
            <Alert status="success">
              <AlertIcon />
              Injected
            </Alert>
          </>
        )}
        <Text textAlign="center">Logged</Text>
        {web3State.isLogged && (
          <>
            <Alert status="success">
              <AlertIcon />
              Connected
            </Alert>
          </>
        )}
        {!web3State.isLogged && (
          <>
            <Text textAlign="center">Please connect your Wallet</Text>
            <Alert status="warning">
              <AlertIcon />
              Not connected
            </Alert>
            <Button mb={6} colorScheme="teal" onClick={login}>
              Connect
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MetaMaskInstalled;
