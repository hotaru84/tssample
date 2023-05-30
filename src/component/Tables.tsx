import { Text,TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";


export default function Index(){
  return (
    <TableContainer>
      <Table variant='striped' colorScheme='cyan'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>
            <Menu>
              <MenuButton as={Button} >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            </Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
};
