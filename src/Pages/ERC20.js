import React from "react";
import { useContext, useState } from "react";
import { ethers } from "ethers";
import { Web3Context, useContract } from "web3-hooks"; // contract
import { Flex, Heading, Stack, Box, Center } from "@chakra-ui/react";
import {
  HeaderComp as Header,
  MetaMaskBalanceOf,
  MetaMaskTransfer,
} from "../components";
import { BlueTokenAddress, BlueTokenAbi } from "../contracts/BlueToken"; // token

function ERC20Page() {
  const bluetoken = useContract(BlueTokenAddress, BlueTokenAbi); // contract token

  const handleBalanceOf = async () => {
    try {
      const tx = await bluetoken.balanceOf(
        "0x8d9ccc9596237e5fd4b88e71e615a2adaa15a415"
      );
      console.log(tx.toString(), "BTKn");
    } catch (e) {
      console.error(e);
    }
  };

  const handleAllowance = async () => {
    try {
      const tx = await bluetoken.allowance(
        "0x8d9ccc9596237e5fd4b88e71e615a2adaa15a415",
        "0x60eaec2089c4170aabf24e2bab6813b5d0cf743a"
      );
      console.log(tx.toString(), "BTKn");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header />
      <Flex flexDirection="column" p={10}>
        <Center>
          <Heading>
            <p>ERC20 Page</p>
          </Heading>
        </Center>

        <Stack spacing={3}>
          <Box>
            <MetaMaskBalanceOf />
          </Box>
          <Box>
            <MetaMaskTransfer />
          </Box>
        </Stack>
        <button type="button" onClick={handleBalanceOf}>
          BalanceOf
        </button>
        <button type="button" onClick={handleAllowance}>
          Allowance
        </button>
      </Flex>
    </>
  );
}

export default ERC20Page;
