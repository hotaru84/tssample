import { Button, Card, CardBody, CardFooter, Container, Heading, SimpleGrid, Stack, Text, Image, ScaleFade} from "@chakra-ui/react";
import React, { useEffect } from "react";


export default function Index(){
  return (
    <Container maxW={"full"} my={4} overflowX={"auto"}>
    </Container>
  );
}
const SampleCard = () => {
  return (
    <Card
      overflow='hidden'
      height={"100%"}
    >
      <Image
        objectFit='cover'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>The perfect latte</Heading>

          <Text py='2'>
            Caffè latte is a coffee beverage of Italian origin made with espresso
            and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}