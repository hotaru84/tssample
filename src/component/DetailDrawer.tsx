import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader, Button, Stack, useColorMode
} from '@chakra-ui/react';
import { CgDarkMode } from 'react-icons/cg';
import { TbUser } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import {enable,toggle } from '../features/counter/debugModeSlice'

export function DetailDrawer(isOpen: boolean, onClose: () => void) {
  const { colorMode, toggleColorMode } = useColorMode();
  const dbg = useSelector((state:any)=> state.debugMode.mode);
  const dispatch = useDispatch();
  return <Drawer
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
        More..
      </DrawerHeader>
      <Stack spacing='2' mx={2} align={"start"}>
        <Button leftIcon={<TbUser />} variant='ghost' width={'full'} onClick={()=>dispatch(toggle())}>
          {'dbg=' + dbg}
        </Button>
        <Button leftIcon={<CgDarkMode />} variant='ghost' width='full' onClick={toggleColorMode}>
          {colorMode}
        </Button>
      </Stack>
    </DrawerContent>
  </Drawer>;
}
