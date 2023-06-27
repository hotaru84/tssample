import { Button, Card, CardBody, CardFooter, Container, Heading, SimpleGrid, Stack, Text, Image, ScaleFade} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';


const configs = {
  a:{
    aa:{
      aaa:{
        aaaa1:12,
        aaaa2:23,
        aaaa3:'aaaa3',
        aaaa4:{
          aaaaa1:{
            v1:4556
          }
        }
      }
    },
    ab : {
      aba: {
        abaa1:34
      }
    }
  },
  b: {
    bb1 :123,
    bb2:{
      bbb1:33,
      bbb2:'test'
    }
  }
}


export default function Index(){
    useEffect(() => {
      window.addEventListener('error', e => {
          if (e.message === 'ResizeObserver loop limit exceeded') {
              const resizeObserverErrDiv = document.getElementById(
                  'webpack-dev-server-client-overlay-div'
              );
              const resizeObserverErr = document.getElementById(
                  'webpack-dev-server-client-overlay'
              );
              if (resizeObserverErr) {
                  resizeObserverErr.setAttribute('style', 'display: none');
              }
              if (resizeObserverErrDiv) {
                  resizeObserverErrDiv.setAttribute('style', 'display: none');
              }
          }
      });
  }, []);
  const json = JSON.stringify(configs,null,1);
  let modified = json;
  return (
    <Container maxW={"full"} my={4} overflowX={"auto"}>
      <DiffEditor 
        height="100%"
        width='100%'
        language="json"
        original={json}
        modified={modified}
        theme="vs-dark"  
      />
    </Container>
  );
}
function findValueFromObject(obj: any, findKey:string): any {
  const maxNested = 4;
  const innerFindValueFromObject = (obj: any, rootkey:string,findKey:string,nest:number): any => {
    if(nest < 0) return null;
    for (const [key,value] of Object.entries(obj)) {
      const tempkey = rootkey.length > 0 ? (rootkey + '.' + key) : key;
      if(tempkey === findKey){
        return value;
      } 
      else if (typeof value === 'object' && value !== null) {
        const res = innerFindValueFromObject(value,tempkey,findKey,--nest);
        if(res !== null) return res;
      }
    }
    return null;
  }
  return innerFindValueFromObject(obj,'',findKey,maxNested);
}
const SampleCard = () => {
  const trg =findValueFromObject(configs,'a.aa.aaa');
  console.log(Object.keys(trg));
  

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