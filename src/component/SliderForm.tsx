import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack
} from '@chakra-ui/react';
import { useState } from 'react';

export const SliderForm: React.FC<{ args: any; }> = ({ args }) => {
  const [sliderValue, setSliderValue] = useState(10);
  return (
    <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)} colorScheme='cyan' mb={4} width="80%">
      <SliderMark
        value={sliderValue}
        fontSize={"sm"}
        textAlign='center'
        mt='2'
        ml='-12'
        w='24'
      >
        {sliderValue}
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
