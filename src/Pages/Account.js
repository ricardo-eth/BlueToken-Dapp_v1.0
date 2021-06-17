import { Flex, Heading } from "@chakra-ui/react";
import { HeaderComp as Header } from "../components";

function AccountPage() {
  return (
    <>
      <Header />
      <Flex flexDirection="column" alignItems="center" m={4} h="300px">
        <Heading size="m" as="i" alignSelf="flex-start">
          <p>Account</p>
        </Heading>
      </Flex>
    </>
  );
}

export default AccountPage;
