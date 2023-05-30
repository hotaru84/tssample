import { ChakraProvider } from "@chakra-ui/react"
import {theme} from './theme'
import NavgationBar from "./pages/NavgationBar";
import Process from "./pages/Process";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Devices from "./pages/Devices";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavgationBar />}>
            <Route path="/" element={<Devices />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/process" element={<Process />} />
            <Route path="*" element={<Devices/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
