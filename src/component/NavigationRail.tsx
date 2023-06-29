import {
  IconButton,
  useColorMode,
  Spacer,
  useColorModeValue,
  useDisclosure,
  Flex,
  Avatar,
  Text,
  Heading,
  VStack,
  Box,
  StackDivider,
  transition,
  IconButtonProps
} from '@chakra-ui/react';
import { TbEdit, TbMenu2, TbPlus, TbRoute, TbSettings, TbSitemap } from 'react-icons/tb';
import {MdSave} from 'react-icons/md'
import { LinkItemProps, NavMenuItem } from './NavMenuItem';
import { Location,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion,useAnimation, useAnimationControls } from 'framer-motion';
import { DetailDrawer } from './DetailDrawer';

const LinkItems: Array<LinkItemProps> = [
  { name: 'Devices', icon: TbSitemap, to:"/devices" },
  { name: 'Process', icon: TbRoute , to:"/process"},
  { name: 'Settings', icon: TbSettings , to:"/settings"},
];

export const NavigationRail = () => {
  const [ fabicon, setFabicon ] = useState<React.ReactElement>((<MdSave/>));
  const { isOpen,onOpen,onClose } = useDisclosure();

  const pointColor = useColorModeValue('cyan.200', 'cyan.600');
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const hoverFilter = useColorModeValue('brightness(90%)', 'brightness(150%)');
  const controls = useAnimationControls();
  const location = useLocation();
  useEffect(()=>{
    controls.start({scale:[1,0,1],originY:0.25},{duration:0.25,ease:'easeIn'}).then(()=>{
      switch(location.pathname) {
        case '/settings':
          return setFabicon(<MdSave/>);
        case '/devices':
          return setFabicon(<TbPlus/>);
        case '/process':
          return setFabicon(<TbEdit/>);
      }
    });
  },[location]);

  return (
    <>
    <Flex
      as="nav"
      pos="sticky"
      top="0"
      left="0"
      zIndex={500}
      h="100vh"
      w="100px"
      bgColor={bgColor}
      direction={"column"}
      align={"center"}
      py={4}
    >
      <IconButton
        fontSize={24}
        aria-label='menu'
        icon={<TbMenu2 />}
        rounded='full'
        bgColor={bgColor}
        _hover={{ filter: hoverFilter }}
        onClick={onOpen}
        px={4}
        mb='12px'
      />
      <motion.div animate={controls} whileTap={{scale:1.1}}>
        <IconButton
          aria-label='action'
          cursor="pointer"
          fontSize={24}
          size={"lg"}
          icon={fabicon}
          bgColor={pointColor}
          _hover={{ filter: hoverFilter }}
          boxShadow='sm'
          rounded="xl"
          p={4}
          mb='56px'
        />
      </motion.div>
      {LinkItems.map((link,i) => (
        <motion.div whileHover={{scale:1.1}}>
          <NavMenuItem {...link} style={{marginBottom:2}} key={i} />
        </motion.div>
      ))}
      <Spacer />
    </Flex>
    {DetailDrawer(isOpen, onClose)}
    </>
  );
};

