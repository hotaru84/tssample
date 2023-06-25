import {
  IconButton,
  useColorMode,
  Spacer,
  useColorModeValue,
  useDisclosure,
  Flex,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  Avatar,
  Text,
  Heading,
  Button,
  VStack
} from '@chakra-ui/react';
import { CgDarkMode } from 'react-icons/cg';
import { TbMenu2, TbPlus, TbRoute, TbSettings, TbSitemap, TbUser } from 'react-icons/tb';
import { LinkItemProps, NavMenuItem } from './NavMenuItem';

const LinkItems: Array<LinkItemProps> = [
  { name: 'Devices', icon: TbSitemap, to:"/devices" },
  { name: 'Process', icon: TbRoute , to:"/process"},
  { name: 'Settings', icon: TbSettings , to:"/settings"},
];

export const NavigationRail = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen,onOpen,onClose } = useDisclosure();

  const pointColor = useColorModeValue('cyan.200', 'cyan.600');
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const hoverFilter = useColorModeValue('brightness(90%)', 'brightness(150%)');
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
      <IconButton
        aria-label='action'
        cursor="pointer"
        fontSize={24}
        size={"lg"}
        icon={<TbPlus />}
        bgColor={pointColor}
        _hover={{ filter: hoverFilter }}
        rounded="xl"
        p={4}
        mb='56px'
      />
      
      {LinkItems.map((link) => (
        <NavMenuItem {...link} style={{marginBottom:2}}/>
      ))}
      <Spacer />
    </Flex>
    <Drawer 
      isOpen={isOpen}
      onClose={onClose}
      placement='left'
      size="menu"
      colorScheme='gray'
    >
      <DrawerOverlay />
      <DrawerContent w="100px">
        <DrawerCloseButton />
        <DrawerHeader>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
          <Avatar icon={<TbUser fontSize={24}/>} boxSize={8}/>
          <Heading size='sm'>Admin</Heading>
          </Flex>
        </DrawerHeader>
        <VStack>
          <Button leftIcon={<CgDarkMode />} variant='ghost' onClick={toggleColorMode}>
            Color Mode
          </Button>
        </VStack>
      </DrawerContent>
    </Drawer>
    </>
  );
};
