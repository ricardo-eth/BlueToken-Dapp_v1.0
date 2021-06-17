import { Flex, Heading } from "@chakra-ui/react";
import { HeaderComp as Header } from "../components";

function ERC20Page() {
  return (
    <>
      <Header />
      <Flex flexDirection="column" alignItems="center" m={4} h="300px">
        <Heading size="m" as="i" alignSelf="flex-start">
          <p>ERC20 Page</p>
        </Heading>
      </Flex>
    </>
  );
}

export default ERC20Page;
