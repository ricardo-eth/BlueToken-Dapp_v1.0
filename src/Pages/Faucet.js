import { useState, useEffect } from "react";
import { Flex, Heading, Center, Button, BeatLoader } from "@chakra-ui/react";
import { HeaderComp as Header } from "../components";
import { useContract } from "web3-hooks";
import { FaucetAddress, FaucetAbi } from "../contracts/Faucet";

function FaucetPage() {
  const faucet = useContract(FaucetAddress, FaucetAbi);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const handleClaimToken = async () => {
    try {
      setLoading(true);
      const tx = await faucet.claimToken();
      await tx.wait();
      console.log("Fauceted");
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (faucet) {
      const timeRest = async () => {
        try {
          const rest = await faucet.timeRest();
          setTimeLeft(rest);
        } catch (e) {
          console.error(e);
        }
      };
      timeRest();
    }
  }, [faucet]);

  return (
    <>
      <Header />
      <Flex flexDirection="column" alignItems="center" m={4} h="300px">
        <Center>
          <Heading>
            <p>Faucet Page</p>
          </Heading>
        </Center>
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" p={12} rounded={6}>
            {timeLeft.toString() === "0" ? (
              <Button
                isLoading={loading}
                loadingText="In process"
                spinnerPlacement="start"
                colorScheme="teal"
                size="lg"
                onClick={handleClaimToken}
              >
                Claim Token
              </Button>
            ) : (
              <p>You need to wait {timeLeft.toString()}</p>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default FaucetPage;
