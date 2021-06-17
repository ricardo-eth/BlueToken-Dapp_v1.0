import React from "react";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";
import {
  Flex,
  Heading,
  HStack,
  Stack,
  Input,
  Button,
  Divider,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { useColorModeValue, chakra } from "@chakra-ui/react";

function MetaMaskTransfer() {
  const [web3State] = useContext(Web3Context);
  const [setEthBalance] = useState(0);
  const [address, setAddress] = useState(ethers.constants.AddressZero);
  const [eth2Send, setEth2Send] = useState(0);

  const handleClickGetBalance = async () => {
    try {
      const balance = await web3State.provider.getBalance(address);
      setEthBalance(ethers.utils.formatEther(balance));
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickSend = async () => {
    const weiAmount = ethers.utils.parseEther(eth2Send);
    try {
      const tx = await web3State.signer.sendTransaction({
        to: address,
        value: weiAmount,
      });
      await tx.wait();
      console.log("TX MINED");
    } catch (e) {
      console.log("##################################");
      console.log(e);
    }
  };
  return (
    <>
      <Flex p={5} alignItems="center" justifyContent="center">
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg={useColorModeValue("gray.100", "gray.900")}
          maxW="2xl"
          w="400px"
        >
          <Box mt={2}>
            <Stack spacing={3}>
              <Box>
                <p>Choose destination address</p>
                <div>
                  <label htmlFor="chooseAddress">{null}</label>

                  <Input
                    variant="flushed"
                    placeholder="Ethereum Address"
                    id="chooseAddress"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />

                  <Button
                    colorScheme="teal"
                    size="md"
                    mt="5"
                    onClick={handleClickGetBalance}
                  >
                    Confirm
                  </Button>
                </div>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Flex>
      <Flex p={5} alignItems="center" justifyContent="center">
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg={useColorModeValue("gray.100", "gray.900")}
          maxW="2xl"
          w="400px"
        >
          <Box mt={2}>
            <Stack spacing={3}>
              <Box>
                <Heading>Verify</Heading>
                <p>Verify destination address</p>
                <label className="address-eth2send" htmlFor="eth2send">
                  {address}
                </label>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Flex>
      <Flex p={5} alignItems="center" justifyContent="center">
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg={useColorModeValue("gray.100", "gray.900")}
          maxW="2xl"
          w="400px"
        >
          <Box>
            <Heading>Amount</Heading>
            <p>Choose amount to transfer (ETH)</p>
            <Stack spacing={3}>
              <Input
                variant="flushed"
                placeholder="Ethereum Address"
                id="eth2Send"
                value={eth2Send}
                onChange={(event) => setEth2Send(event.target.value)}
              />
            </Stack>
            <Button
              colorScheme="teal"
              size="md"
              mt="5"
              onClick={handleClickSend}
            >
              send
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default MetaMaskTransfer;
