import { ChakraProvider } from "@chakra-ui/react"
import {theme} from './theme'
import Main from "./pages/Main";
import Process from "./pages/Process";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { AuthUserProvider } from "./provider/AuthUser";
import { RouteAuthGuard } from "./component/RouteAuthGuard";
import { RoleType } from "./types";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RouteAuthGuard component={<Main />} redirect="/login" allowroles={[RoleType.Admin]}/>}>
              <Route path="devices" element={<Devices />} />
              <Route path="settings" element={<Settings />} />
              <Route path="process" element={<Process />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default App;
