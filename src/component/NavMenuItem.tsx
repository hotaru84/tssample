import {
  Icon, Text,
  useColorModeValue, VStack
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { NavLink, NavLinkProps } from 'react-router-dom';

export interface LinkItemProps extends NavLinkProps {
  name: string;
  icon: IconType;
  to:string;
}

export const NavMenuItem = ({name,icon,to,...rest}: LinkItemProps) => {
  const pointColor = useColorModeValue('cyan.200', 'cyan.600');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const hoverFilter = useColorModeValue('brightness(90%)', 'brightness(150%)');
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }} role='group' key={name} {...rest}>
      {({ isActive }) => (  
        <VStack color={textColor} py={2} spacing={0}>
          <Icon
            as={icon}
            w={14}
            h={10}
            py={2}
            fontWeight={'normal'}
            _groupHover={{ filter:hoverFilter}}
            bgColor={isActive ? pointColor : bgColor}
            borderRadius={'full'} />
          <Text fontSize={"sm"} fontWeight={'normal'}>{name}</Text>
        </VStack>
      )}
    </NavLink>
  );
};
