import { Alert, AlertIcon, Button, Card, Container, Spacer} from "@chakra-ui/react";
import React, { useState } from "react";

import ReactGridLayout,{ WidthProvider } from "react-grid-layout";
import "../theme/layoutStyles.css"
import { wait } from "@testing-library/user-event/dist/utils";
const GridLayout = WidthProvider(ReactGridLayout);



export default function Index(){
  const cardWidth = 3;
  const [msg,setMsg] = useState<string>("");
  const [isConnected, setConnect] = useState(false);

  const socketRef = React.useRef<WebSocket>()
  React.useEffect(()=>{
    const sock = new WebSocket("ws://127.0.0.1:5000/");
    socketRef.current = sock;
    console.log("try connect");
    const onMessage = (event: MessageEvent<string>) => {
      setMsg(event.data)
    };
    sock.onopen = () => setConnect(true);
    sock.onclose = () => setConnect(false);
    sock.onerror = () => setConnect(false);
    sock.onmessage = onMessage;

    return () => {
      sock.close();
      sock.onopen = null;
      sock.onclose = null;
      sock.onerror = null;
      sock.onmessage = null;
    }
  },[isConnected]);

  return (
    <Container maxW="4xl">
      <Alert status={isConnected?'success':'error'} m={2}>
        <AlertIcon />
        {isConnected?'Connected':'Closed'}
        <Spacer />
        {isConnected?null:<Button onClick={()=>setConnect(true)}>
          Connect
        </Button>}
      </Alert>
      <GridLayout
        className="layout"
        cols={12}
        rowHeight={40}
        verticalCompact={false}
      >
        {[...Array(12)].map((_,index)=>{
          const datagrid = {x:index*cardWidth%12|0,y:0,w:cardWidth,h:2};
          return (
            <Card
              key={index}
              data-grid={datagrid}
            >
              {index}
            </Card>
          )
          })
        }
      </GridLayout>
      <Button onClick={()=>socketRef.current?.send("Start!")}>
        {msg}
      </Button>
    </Container>
  );
}
