import { Flex } from "@chakra-ui/react";
import { HeaderComp as Header, MetaMaskInstalled } from "../components";

function HomePage() {
  return (
    <>
      <Header />

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <MetaMaskInstalled />
      </Flex>
    </>
  );
}

export default HomePage;
