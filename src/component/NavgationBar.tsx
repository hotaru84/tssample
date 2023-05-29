import {
  Icon,
  Container,
  Tab,
  TabList,
  Tabs,
  MenuButton,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  Avatar,
  MenuDivider,
  useColorMode,
  Spacer,
  HStack,
  Divider
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { CgDarkMode } from 'react-icons/cg';
import {TbCalendarTime, TbLanguage, TbRoute,TbSettings,TbSitemap, TbUser} from 'react-icons/tb'
import { NavLink, Outlet } from 'react-router-dom';

interface LinkItemProps {
  name: string;
  icon: IconType;
  to:string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Devices', icon: TbSitemap, to:"/devices" },
  { name: 'Process', icon: TbRoute , to:"/process"},
];

const SettingItems:  Array<LinkItemProps> = [
  { name: 'Date & Time', icon: TbCalendarTime, to:"/datetime" },
  { name: 'Locale', icon: TbLanguage , to:"/locale"},
];

export default function Index() {
  return (
    <>
      <NavigationBar/>
      <Container maxW="full">
        <Outlet/>
      </Container>
    </>
  );
}
const NavigationBar = ()=>{
  const {colorMode,toggleColorMode} = useColorMode();
  return (
    <>
    <HStack px={4} py={2}>
      <Avatar icon={<TbUser />} size="sm" fontSize={20} cursor="pointer" />
      <Spacer/>
      <Tabs as="nav" align="center" variant="soft-rounded" colorScheme="cyan">
        <TabList>
          {LinkItems.map((link) => (
            <Tab as={NavLink} to={link.to} >
              <Icon
                mr="1"
                boxSize="4"
                as={link.icon}
              />
              {link.name}
            </Tab>
          ))}
        </TabList> 
      </Tabs>
      <Spacer />
      <Menu>
        <MenuButton as={IconButton} colorScheme='gray'  icon={<TbSettings />}>
        </MenuButton>
        <MenuList>
          {SettingItems.map((link, index) => (
            <MenuItem
              key={index}
              fontSize={14}
            >
              <Icon as={link.icon} mr={2}/>
              {link.name}
            </MenuItem>
          ))}
          <MenuDivider/>
        </MenuList>
      </Menu>
      <IconButton aria-label='Night' onClick={toggleColorMode} icon={<CgDarkMode />}/>
    </HStack>
    <Divider/>
    </>
  );
}
