import {
  Box,
  Container,
  chakra,
  useColorModeValue,
  HStack,
  Text,
  Icon,
  Spacer,
  Center,
  VStack,
  Card,
  color,
  Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { truncate } from 'fs';
import { IconType } from 'react-icons';
import { MdFlashOn, MdOutlineMessage } from 'react-icons/md';
import { TbPackage, TbBarcode, TbDatabase } from 'react-icons/tb';

const points:PointProps[] = [
  {
    title: 'A',
    icon: MdFlashOn,
    description: "Desc A",
  },
  {
    title: 'B',
    icon: TbPackage,
    description: "Desc B" ,
  },
  {
    title: 'C',
    icon: TbBarcode,
    description: "Desc C" ,
  },
  {
    title: 'D',
    icon: MdOutlineMessage,
    description: "Desc D" ,
  },
  {
    title: 'E',
    icon: TbDatabase,
    description: "Desc E" ,
  },
];

interface PointProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function Index(){
  const borderColor = useColorModeValue('gray.400','gray.500');
  const pointColor = useColorModeValue('cyan.400','cyan.500');
  const widthPx = 200;
  return (
    <Container maxW="xl" centerContent>
      <HStack spacing={8} position="relative">
        {points.map((point,index) =>(
          <VStack pt={8} width={widthPx + "px"}>
            <motion.div
              whileHover={{ scale: 1.2,color:borderColor}}
              whileTap={{ scale: 0.8 }}
            >
              <VStack cursor={"pointer"} >
                <Text fontSize="md" color={pointColor}>{point.title}</Text>
                <Icon
                  as={point.icon}
                  boxSize={8}
                  color={pointColor}
                />
              </VStack>
            </motion.div>
            <DotLine/>
          </VStack>
        ))}
        <Center
          position="absolute"
          bottom="4px"
          width="100%"
          border="1px dashed"
          borderColor={borderColor}
        />
      </HStack>
    </Container>
  );
};

const DotLine = () =>{
  const borderColor = useColorModeValue('gray.400','gray.500');
  return (
    <>
      <chakra.span
        left="50%"
        top="0px"
        bottom="0px"
        height="20px"
        border="1px dashed"
        borderColor={borderColor}
      />      
      <Center
        width="12px"
        height="12px"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        bg={borderColor}
        borderRadius="10px"
        backgroundImage="none"
        opacity={1}/>
    </>
  )
};