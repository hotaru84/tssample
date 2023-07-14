import { lazy, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react"
import {theme} from './theme'
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import { AuthUserContextType, AuthUserProvider, useAuthUserContext } from "./provider/AuthUser";
import { RouteAuthGuard } from "./component/RouteAuthGuard";
import { RoleType } from "./types";


const Devices = lazy(() => import("./pages/Devices"));
const Process = lazy(() => import("./pages/Process"));
const Settings = lazy(() => import("./pages/Settings"));


function App() {
  const [isLoggedIn,setLogIn] = useState<Boolean>();
  const authUser = useAuthUserContext().user;
  useEffect(()=>{
    const allowRoute = authUser? RoleType.Admin.includes(authUser.role) : false;
    console.log(allowRoute);
    setLogIn(allowRoute);
  },[authUser]);
  
  return (
    <ChakraProvider theme={theme}>
      <AuthUserProvider>
        <BrowserRouter>
          <Routes>
            {isLoggedIn ? (
              <Route path="/" element={<Main />}>
                <Route path="devices" element={<Devices />} />
                <Route path="settings" element={<Settings />} />
                <Route path="process" element={<Process />} />
              </Route>
            )
            :(
              <Route path="/" element={<Login />} />
            )}
          </Routes>
        </BrowserRouter>
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default App;
