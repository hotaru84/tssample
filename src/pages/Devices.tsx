import { Button, Card, CardBody, CardFooter, Container, Heading, SimpleGrid, Stack, Text, Image, ScaleFade, CardHeader, Avatar, Box, Flex, IconButton, HStack, VStack, Circle, Center, keyframes, Slide } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { StatusIndicator } from "../component/StatusIndicator";
import { TbBarcode, TbDots } from "react-icons/tb";
import { MotionConfig, motion } from "framer-motion";

export default function Index() {
  return (
    <Container maxW={"full"} my={4} overflowX={"auto"}>
      <SimpleGrid columns={3} gap={4}>
        <DeviceCard />
        <DeviceCard />
        <DeviceCard />
      </SimpleGrid>
    </Container>
  );
}
const DeviceCard = () => {
  return (
    <motion.div whileHover={{ }}>
      <Card
        direction="column"
        position={'relative'}
        rounded="md"
        w="100%"
        textAlign="left"
        align="start"
        role="group"
        overflow="hidden"
      >
        <StatusIndicator boxSize={3} bgColor="green.300" position="absolute" top={2} right={2} isActive/>
        <HStack py={3} px={5} spacing={4}>
          <Center
            rounded="lg"
            bgColor={"gray.400"}
            p={2}
            w={12}
            h={12}
          >
            <TbBarcode fontSize={30} color="white"/>
          </Center>
          <VStack spacing={0} align="start" maxW="lg" h="100%">
            <Text as="h3" fontSize="md" noOfLines={2} color="gray.400">
              Device type
            </Text>
            <HStack spacing={2} >
              <Heading size="md" noOfLines={1} isTruncated>
                Device Name
              </Heading>
              <Flex>
              </Flex>
            </HStack>
          </VStack>
        </HStack>
      </Card>
    </motion.div>
  )
}