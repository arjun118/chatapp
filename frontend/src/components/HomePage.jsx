import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
//box works as a div
//we can write inline css using Box
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
const HomePage = () => {
  return (
    <Container maxW="lg" centerContent>
      <Box
        display={"flex"}
        justifyContent={"center"}
        p={4}
        bg={"cyan"}
        w={"100%"}
        // m="40px 0 15px 0"
        mt="15"
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Text fontSize={"2xl"}>Chat App</Text>
      </Box>

      {/* login/sign up box starts */}
      <Box
        mt={"10px"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
        color={"black"}
      >
        <Tabs variant={"soft-rounded"}>
          <TabList textColor={"red"} mb={"1em"}>
            <Tab width={"50%"}>Login </Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>

          <TabPanels textColor={"white"}>
            <TabPanel>{<Login></Login>}</TabPanel>
            <TabPanel>
              <SignUp></SignUp>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
