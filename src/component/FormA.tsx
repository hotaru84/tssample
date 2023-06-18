import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spacer,
  useColorModeValue,
  FormHelperText,
  Divider,
} from '@chakra-ui/react'
import { useState } from 'react';

type FormInputs = {
  title: string;
  desc: string;
};

export default function FormA() {
  const [sliderValue, setSliderValue] = useState(100);
  const pointColor = useColorModeValue('cyan.400', 'cyan.500');
  return (
    <Card>
      <CardBody>
      <FormControl>
        <FormLabel fontWeight={"light"}>a</FormLabel>
        <Select colorScheme='cyan' pl={4} mb={4}/>
        <FormLabel fontWeight={"light"}>b</FormLabel>
        <Select colorScheme='cyan' pl={4} mb={4}/>
        <FormLabel fontWeight={"light"}>c</FormLabel>
        <Select colorScheme='cyan' pl={4} mb={4}/>
        <FormLabel fontWeight={"light"}>d</FormLabel>
        <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)} colorScheme='cyan' mb={4} width="80%">
          <SliderMark
            value={sliderValue}
            fontSize={"sm"}
            textAlign='center'
            color={pointColor}
            mt='2'
            ml='-12'
            w='24'
          >
            {sliderValue}mm
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <FormLabel fontWeight={"light"} >e</FormLabel>
        <NumberInput>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      </CardBody>
      <CardFooter>
        <Spacer />
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme="cyan">
            Apply
          </Button>
          <Button variant='ghost' colorScheme="cyan">
            Cancel
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}