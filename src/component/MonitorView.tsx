import {
  Flex, useColorModeValue,
} from '@chakra-ui/react';
export const MonitorView = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const pointColor = useColorModeValue('cyan.400', 'cyan.500');
  return (
      <Flex width={'80vw'} height={'60vh'} bgColor={bgColor} mt={2}>
        
      </Flex>
  )
}