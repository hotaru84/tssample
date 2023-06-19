import { Input } from '@chakra-ui/react';

export const TextForm: React.FC<{ args: any; }> = ({ args }) => {
  return (
    <Input variant='outline' placeholder='Text' />
  );
};
