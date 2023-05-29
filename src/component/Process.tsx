import React, {  } from 'react';
import { WidthProvider } from "react-grid-layout";
import ReactGridLayout from "react-grid-layout";

import "../App.css"
import {
  Box,
  Container,
  Text,
  Flex,
  Card,
  Avatar,
  CardHeader,
  Heading,
  Center,
  chakra,
  useColorModeValue,
  Step,
  StepIcon,
  StepIndicator,
  StepStatus,
  Stepper,
  StepSeparator
} from '@chakra-ui/react';

import {points} from '../resources/points'

const GridLayout = WidthProvider(ReactGridLayout);

export default function Index(){


  return (
    <Box
      maxW="full"
      justifyContent={"center"}
      overflow="hidden">
      <Stepper size='xs' index={2}>
        {points.map((point,index)=>{
          return (
            <Step key={index}>
              <StepIndicator mr={0}>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator/>
            </Step>
          )
          })
        }
      </Stepper>
    </Box>
  );
};
const LineWithDot = () => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Flex w={10} h={10} _before={{
      content: `""`,
        w: '0',
        h: '0',
        borderStyle: 'solid',
        borderWidth: '15px 15px 15px 0',
        position: 'absolute',
        left: '-15px',
        display: 'block'
    }}>  
    </Flex>
  );
};

function useSteps(arg0: { index: number; count: any; }): { activeStep: any; setActiveStep: any; } {
  throw new Error('Function not implemented.');
}
