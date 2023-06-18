import {
  chakra,
  useColorModeValue,
  Icon,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { TbPackageImport, TbPackageExport, TbArrowFork, TbDatabase, TbMapPin, TbMessageForward, TbRoute } from 'react-icons/tb';

import FormA from '../component/FormA';
import React, {  } from 'react';

const MirroredTbPackageImport = ({ ...props }) => {
  return (
    <TbPackageImport {...props} style={{ transform: 'scaleX(-1)' }} />
  )
};
const RotatedTbArrowFork = ({ ...props }) => {
  return (
    <TbArrowFork {...props} style={{ transform: 'rotate(90deg)' }} />
  )
}
const points: PointProps[] = [
  {
    title: 'A',
    icon: TbMessageForward,
    description: "Desc A",
  },
  {
    title: 'b',
    icon: MirroredTbPackageImport,
    description: "Desc B",
  },
  {
    title: 'c',
    icon: TbMapPin,
    description: "Desc C",
  },
  {
    title: 'd',
    icon: TbDatabase,
    description: "Desc D",
  },
  {
    title: 'e',
    icon: RotatedTbArrowFork,
    description: "Desc D",
  },
  {
    title: 'f',
    icon: TbPackageExport,
    description: "Desc E",
  },
];

interface PointProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function Index() {
  const borderColor = useColorModeValue('gray.400', 'gray.500');
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const pointColor = useColorModeValue('cyan.400', 'cyan.500');
  return (
    <Center>
      <Tabs colorScheme="cyan" variant="unstyled" isFitted mt={2}>
        <TabList>
          {points.map((point) => (
            <Tab _selected={{color:pointColor}}  color={borderColor}>
              <Icon
                mr="2"
                boxSize="6"
                as={point.icon}
              />
              {point.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {points.map((point) => (
            <TabPanel>
              <FormA />
            </TabPanel>            
          ))}
        </TabPanels>
      </Tabs>
      <Icon
        cursor="pointer"
        position="fixed"
        right={6}
        bottom={6}
        as={TbRoute}
        bgColor={bgColor}
        color={pointColor}
        w={14}
        h={14}
        rounded="full"
        p={3}
        boxShadow="md"
        _hover={{
          bgColor:borderColor
        }}
      />
    </Center>
  );
};

const DotLine = () => {
  const dotSize = 14;
  const borderColor = useColorModeValue('gray.400', 'gray.500');
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
        width={dotSize + 'px'}
        height={dotSize + 'px'}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        bg={borderColor}
        borderRadius="10px"
        backgroundImage="none"
        opacity={1} />
    </>
  )
};