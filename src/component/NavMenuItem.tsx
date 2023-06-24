import {
  Icon, Text,
  useColorModeValue, VStack
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { LinkItemProps } from '../pages/NavgationRail';

export const NavMenuItem = (link: LinkItemProps) => {
  const pointColor = useColorModeValue('cyan.200', 'cyan.400');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const hoverFilter = useColorModeValue('brightness(90%)', 'brightness(150%)');
  return (
    <NavLink to={link.to} style={{ textDecoration: 'none' }} role='group'>
      {({ isActive }) => (
        <VStack color={textColor} pb={6} spacing={0}>
          <Icon
            as={link.icon}
            w={14}
            h={8}
            py={1}
            fontWeight={'normal'}
            _groupHover={{ filter:hoverFilter}}
            bgColor={isActive ? pointColor : bgColor}
            borderRadius={'full'} />
          <Text fontSize={"sm"} fontWeight={'normal'}>{link.name}</Text>
        </VStack>
      )}
    </NavLink>
  );
};
