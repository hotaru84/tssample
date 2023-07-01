import { Card, Heading, Text, Image, CardProps, CardBody } from "@chakra-ui/react";
import React from "react";
import { StatusIndicator } from "./StatusIndicator";

export interface DeviceInfo {
  name:string;
  type:string;
}
interface DeviceCardProps extends CardProps {
  info:DeviceInfo;
}

export const DeviceCard = (props:DeviceCardProps) => {
  const info = props.info;
  return (
    <Card
      rounded="md"
      role="group"
      align="center"
      overflow="hidden"
      {...props}
      _hover={{borderWidth:1.5,borderColor:"gray.400"}}
    >
      <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />
      <StatusIndicator boxSize={3} bgColor="green.300" position="absolute" top={2} right={2} isActive />

      <CardBody my={2}>
        <Text as="h3" fontSize="md" noOfLines={1} color="gray.400">
          {info.type}
        </Text>
        <Heading size="md" noOfLines={1} isTruncated>
          {info.name}
        </Heading>
      </CardBody>
    </Card>
  );
};
