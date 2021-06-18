import { useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Context, useContract } from "web3-hooks"; // contract
import { Flex, Heading, Stack, Box, Center, useToast } from "@chakra-ui/react";
import {
  HeaderComp as Header,
  MetaMaskBalanceOf,
  MetaMaskTransfer,
  ERC20Infos,
} from "../components";
import { BlueTokenAddress, BlueTokenAbi } from "../contracts/BlueToken"; // token

function ERC20Page() {
  const bluetoken = useContract(BlueTokenAddress, BlueTokenAbi); // contract token
  const [web3State] = useContext(Web3Context);
  const [tokenName, setTokenName] = useState();
  const [tokenSymbol, setTokenSymbol] = useState();
  const [tokenTotalSupply, setTotalTokenSupply] = useState();
  const [userBalance, setUserBalance] = useState();
  const toast = useToast();

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

  useEffect(() => {
    if (bluetoken) {
      const getInfo = async () => {
        try {
          const name = await bluetoken.name();
          const symbol = await bluetoken.symbol();
          const supply = await bluetoken.totalSupply();
          const balance = await bluetoken.balanceOf(web3State.account);
          setTokenName(name);
          setTokenSymbol(symbol);
          setTotalTokenSupply(ethers.utils.formatEther(supply));
          setUserBalance(ethers.utils.formatEther(balance));
        } catch (e) {
          toast({
            title: `${e.message}`,
            status: "error",
            isClosable: true,
          });
        }
      };
      getInfo();
    }
  }, [bluetoken, toast]);

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
            <ERC20Infos
              tokenName={tokenName}
              tokenSymbol={tokenSymbol}
              tokenTotalSupply={tokenTotalSupply}
              userBalance={userBalance}
            />
          </Box>
          <Box>
            <MetaMaskBalanceOf bluetoken={bluetoken} />
          </Box>
          <Box>
            <MetaMaskTransfer bluetoken={bluetoken} />
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
