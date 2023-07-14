import { Suspense, useEffect} from 'react';
import {
  Center,
  CircularProgress,
  Container,
  Flex,
  Progress
} from '@chakra-ui/react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { NavigationRail } from '../component/NavigationRail';

function loading() {
  return (
    <Center width={"100%"}>
      TODO:loading animation
    </Center>
  )
} 

export default function Index() {
  return (
    <Flex>
      <NavigationRail/>
      <Suspense fallback={loading()}>
        <Outlet />
      </Suspense>
    </Flex>
  );
}


