import {
  chakra,
  useColorModeValue,
  Text,
  Icon,
  Center,
  VStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  AvatarBadge
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { MdOutlineMessage } from 'react-icons/md';
import { TbPackage, TbBarcode, TbPackageImport, TbPackageExport, TbArrowFork } from 'react-icons/tb';

import Tables from '../component/Tables'

const MirroredTbPackageImport = ({...props}) =>{
  return (
    <TbPackageImport {...props} style={{transform:'scaleX(-1)'}}/>
  )
};
const RotatedTbArrowFork =({...props}) =>{
  return(
    <TbArrowFork {...props} style={{transform:'rotate(90deg)'}} />
  )
}
const points:PointProps[] = [
  {
    title: 'A',
    icon: MirroredTbPackageImport,
    description: "Desc A",
    width:0
  },
  {
    title: 'B',
    icon: TbPackage,
    description: "Desc B" ,
    width:100
  },
  {
    title: 'C',
    icon: TbBarcode,
    description: "Desc C" ,
    width:60
  },
  {
    title: 'D',
    icon: MdOutlineMessage,
    description: "Desc D" ,
    width:30
  },
  {
    title: 'D',
    icon: RotatedTbArrowFork,
    description: "Desc D" ,
    width:400
  },
  {
    title: 'E',
    icon: TbPackageExport,
    description: "Desc E" ,
    width:0
  },
];

interface PointProps {
  title: string;
  description: string;
  icon: IconType;
  width:number;
}

export default function Index(){
  const borderColor = useColorModeValue('gray.400','gray.500');
  const pointColor = useColorModeValue('cyan.400','cyan.500');
  const widthPx = 64;
  const totalWidth = points.reduce((ttl,p)=>(p.width + ttl),0)
  return (
    <Tabs position={"relative"} align='center' variant='unstyled'>
      <TabList>
        {points.map((point) =>(
          <Tab as={VStack} width={point.width + 'px'} _selected={{color:pointColor}}  color={borderColor}>
            <motion.div whileHover={{scale:1.1}}>
              <VStack cursor={"pointer"} width={widthPx + "px"}>
                <Text fontSize="md">{point.title}</Text>
                <Icon
                  as={point.icon}
                  boxSize={8}
                />
              </VStack>
            </motion.div>
            <DotLine/>
          </Tab>
        ))}
        <Center
          position="absolute"
          top="116px"
          width={totalWidth + 'px'}
          border="1px dashed"
          borderColor={borderColor}
        />
      </TabList>

      <TabPanels>
        {points.map((point,index) =>(
          <TabPanel>
            <Tables />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

const DotLine = () =>{
  const dotSize = 14;
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
        width={dotSize+'px'}
        height={dotSize+'px'}
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