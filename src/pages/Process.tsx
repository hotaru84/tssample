import {
  useColorModeValue,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Collapse,
  Flex,
  useBoolean,
  Container,
  Slide,
  SlideFade,
  Fade,
  VStack} from '@chakra-ui/react';
import { TbEdit, TbRoute } from 'react-icons/tb';

import { ConfigForm } from '../component/ConfigForm';
import React, { useState } from 'react';
import { points } from '../resources/points';
import { MonitorView } from '../component/MonitorView';
import { motion } from 'framer-motion';

export default function Index() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isMonitor,monitor] = useBoolean(false);
  const borderColor = useColorModeValue('gray.400', 'gray.500');
  const bgColor = useColorModeValue('gray.200', 'gray.700');
  const pointColor = useColorModeValue('cyan.400', 'cyan.500');
  return (
    <Container>
      <Collapse in={isMonitor} animateOpacity>
        <MonitorView/>
      </Collapse>
      <Tabs 
        colorScheme="cyan"
        variant="unstyled"
        isFitted
        mt={2}
        index={tabIndex}
        onChange={(i)=>setTabIndex(i)}
      >
        <TabList>
          {points.map((point) => (
            <Tab _selected={{color:pointColor}}  color={borderColor}>
              <Icon
                mr="2"
                boxSize="6"
                as={point.icon}
              />
              {point.title}
            </Tab>
          ))}
        </TabList>
        <Collapse in={!isMonitor} animateOpacity>
          <TabPanels>
            {points.map((point) => (
              <TabPanel key={`tab-${point.title}`}>
                <ConfigForm props={point.formProps} />
              </TabPanel>
            ))}
          </TabPanels>
        </Collapse>
      </Tabs>
      <Icon
        cursor="pointer"
        position="fixed"
        right={6}
        bottom={6}
        as={isMonitor?TbEdit:TbRoute}
        bgColor={bgColor}
        color={pointColor}
        w={14}
        h={14}
        rounded="full"
        p={3}
        boxShadow="md"
        _hover={{
          bgColor:borderColor
        }}
        onClick={monitor.toggle}
      />
    </Container>
  );
};

