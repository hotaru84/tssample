import { Card, Container} from "@chakra-ui/react";
import React from "react";

import ReactGridLayout,{ WidthProvider } from "react-grid-layout";
import "../theme/layoutStyles.css"
const GridLayout = WidthProvider(ReactGridLayout);

export default function Index(){
  const cardWidth = 3;
  return (
    <Container maxW="4xl">
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
    </Container>
  );
}
