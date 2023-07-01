import { Heading, useBoolean, Image, VStack, HStack, Wrap, Stack, IconButton,Text } from "@chakra-ui/react";
import React, {  } from "react";
import { DeviceCard, DeviceInfo } from "../component/DeviceCard";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
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
  const [open,button] = useBoolean(false);
  return (
    <Stack direction="row" height={"100vh"} overflowY={"hidden"} >
      <Wrap 
        justify={"center"}
        spacing={4}
        height="100%"
        overflowY={'auto'}
        shouldWrapChildren
      >
        {devices.map((d,index) => (
          <DeviceCard info={d} key={index} onClick={()=>button.on()}/>
        ))}
      </Wrap>
      <motion.div
        animate={{width:open?"100%":"0",opacity:open?1:0}}
      >
        <VStack>
          <HStack>
            <Heading fontWeight={"light"} m={2}>Device</Heading>
            <IconButton aria-label="close" icon={<MdClose />} variant={"ghost"} onClick={()=>button.off()}>Close</IconButton>
          </HStack>
          <Image boxSize={32} />
        </VStack>
      </motion.div>
    </Stack>
  );
}
