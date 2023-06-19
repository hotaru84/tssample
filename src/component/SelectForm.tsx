import { Select } from '@chakra-ui/react';

export const SelectForm: React.FC<{ args: any; }> = ({ args }) => {
  return (
    <Select placeholder='Select option' colorScheme='cyan'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  );
};
