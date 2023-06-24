import {
  Box,
  Button,
  Divider,
  Flex, useColorModeValue,
} from '@chakra-ui/react';
import { motion, useAnimation, useTime, useTransform } from 'framer-motion';

export const MonitorView = () => {
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const pointColor = useColorModeValue('cyan.400', 'cyan.500');
  const controls = useAnimation();
  const time = useTime();
  return (
    <>
      <Button onClick={()=>controls.start({x:"100%"})}>START</Button>
      <Flex position="relative" width={'80vw'} height={'60vh'} bgColor={bgColor} mt={2}>
        <motion.div 
          animate={controls}
          transition={{ ease: 'linear', duration: .2 }}
        >
          <Box
            width={'20px'}
            height={'20px'}
            bgColor={'orange'}
          />
          
          </motion.div>  
          <Box 
            position='absolute'
            top="50%"
            width={'100%'}
            border="1px solid"
            borderColor='teal'
          />
      </Flex>
      </>
  )
}