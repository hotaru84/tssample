import {
  IconButton,
  useColorMode,
  Spacer,
  useColorModeValue,
  useDisclosure,
  Flex} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { CgDarkMode } from 'react-icons/cg';
import {TbBarcode, TbCalendarTime, TbLanguage, TbMenu2, TbPlus, TbRoute,TbSettings,TbSitemap} from 'react-icons/tb'
import { Outlet } from 'react-router-dom';
import { NavMenuItem } from '../component/NavMenuItem';

export interface LinkItemProps {
  name: string;
  icon: IconType;
  to:string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Devices', icon: TbSitemap, to:"/devices" },
  { name: 'Process', icon: TbRoute , to:"/process"},
  { name: 'Settings', icon: TbSettings , to:"/settings"},
];

const SettingItems:  Array<LinkItemProps> = [
  { name: 'Date & Time', icon: TbCalendarTime, to:"/datetime" },
  { name: 'Locale', icon: TbLanguage , to:"/locale"},
];

export default function Index() {
  return (
    <Flex>
      <NavigationRail/>
      <Flex width={"100%"}>
        <Outlet/>
      </Flex>
    </Flex>
  );
}
const NavigationRail = ()=>{
  const {colorMode,toggleColorMode} = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const pointColor = useColorModeValue('cyan.100', 'cyan.500');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  
  const hoverFilter = useColorModeValue('brightness(90%)', 'brightness(150%)');
  
  return (
  <Flex
    as="nav"
    pos="sticky"
    top="0"
    left="0"  
    h="100vh"
    w="100px"
    direction={"column"}
    align={"center"}
    borderRightWidth="1px"
    py={4}
  >
    <IconButton
      aria-label='action'
      cursor="pointer"
      fontSize={24}
      bgColor={bgColor}
      _hover={{ filter:hoverFilter}}
      size={"sm"}
      icon={<TbMenu2/>}
      rounded="full"
      px={4}
      mb={4}
    />
    <IconButton
      aria-label='action'
      cursor="pointer"
      fontSize={24}
      size={"lg"}
      icon={<TbPlus/>}
      colorScheme='orange'
      rounded="xl"
    />
    <Spacer/>
    {LinkItems.map((link) => (
      <NavMenuItem {...link}/>
    ))}
    <Spacer />
    <IconButton 
      aria-label='Night'
      fontSize={24}
      bgColor={bgColor}
      _hover={{ filter:hoverFilter}}
      onClick={toggleColorMode}
      variant="ghost"
      rounded="full"
      px={4}
      icon={<CgDarkMode />}/>
  </Flex>
  );
}


