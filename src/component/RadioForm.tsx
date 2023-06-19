import {
  Radio,
  RadioGroup,
  Stack
} from '@chakra-ui/react';
import { useState } from 'react';


export const RadioForm: React.FC<{ args: any; }> = ({ args }) => {
  const [value, setValue] = useState('1');
  return (
    <RadioGroup onChange={setValue} value={value} colorScheme='cyan'>
      <Stack direction='row'>
        <Radio value='1'>First</Radio>
        <Radio value='2'>Second</Radio>
        <Radio value='3'>Third</Radio>
      </Stack>
    </RadioGroup>
  );
};
