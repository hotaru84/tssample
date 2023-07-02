import { Wrap, Container, useDisclosure, Image, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, Center, Stack } from "@chakra-ui/react";
import React, {  } from "react";
import { DeviceCard, DeviceInfo } from "../component/DeviceCard";
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
    <Container height={"100vh"} maxW={"full"} overflowY={"hidden"} >
      <Wrap 
        justify={"center"}
        mt={4}
        spacing={4}
        height="100%"
        width={'full'}
        overflowY={'auto'}
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
        size={'md'}
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
