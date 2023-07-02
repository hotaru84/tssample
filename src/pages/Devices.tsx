import { Wrap, Container, useDisclosure, Image, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, Center, Text, VStack } from "@chakra-ui/react";
import React, {  } from "react";
import { DeviceCard, DeviceInfo } from "../component/DeviceCard";
import { motion } from "framer-motion";
const devices:DeviceInfo[] = [
  {
    name:"test",
    type:"type"
  },
  {
    name:"test",
    type:"type"
  },
  {
    name:"test",
    type:"type"
  },
  {
    name:"test",
    type:"type"
  },
  {
    name:"test",
    type:"type"
  },
  {
    name:"test",
    type:"type"
  },
];

export default function Index() {
  const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <Container  maxW={"full"} overflowY={"auto"} height={"100vh"}>
      <Text>Device type</Text>
      <Wrap 
        justify={"center"}
        spacing={4}
        py={2}
        shouldWrapChildren
      >
        {devices.map((d,index) => (
          <DeviceCard info={d} key={index} onClick={onOpen}/>
        ))}
      </Wrap>
      <Text>Device type2</Text>
      <Wrap 
        justify={"center"}
        spacing={4}
        py={2}
        shouldWrapChildren
      >
        {devices.map((d,index) => (
          <DeviceCard info={d} key={index} onClick={onOpen}/>
        ))}
      </Wrap>
     <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        size={['full','md']}
        colorScheme='gray'
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Device
          </DrawerHeader>
          <Center>
            <Image src='https://via.placeholder.com/200' boxSize={'300px'} objectFit={'contain'}/>
          </Center>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}
