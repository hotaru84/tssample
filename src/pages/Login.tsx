import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate, useLocation, redirect } from 'react-router-dom';
import { AuthUserContextType, useAuthUserContext } from '../provider/AuthUser';
import { RoleType, UserType } from '../types';

type CustomLocation = {
  state: { from: { pathname:string } }
};

export default function Index() {
  const navigate = useNavigate();
  const location:CustomLocation = useLocation() as CustomLocation;
  //TODO:
  const fromPathName:string = location.state.from.pathname === "/"?"/devices":location.state.from.pathname;
  const authUser:AuthUserContextType = useAuthUserContext();
  //TODO:browser back sction should be prohibited
  
  const signin = (role:RoleType) => {
    const user: UserType = {
      name: "no-name",
      role: role
    }
    authUser.signin(user, () => { 
      navigate(fromPathName, { replace: false })
    });
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={()=>signin(RoleType.Admin)}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}