import {
  Flex
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { NavigationRail } from '../component/NavigationRail';


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


