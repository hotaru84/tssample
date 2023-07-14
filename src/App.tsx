import { lazy, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react"
import {theme} from './theme'
import Main from "./pages/Main";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AuthUserContextType, AuthUserProvider, useAuthUserContext } from "./provider/AuthUser";
import { RouteAuthGuard } from "./component/RouteAuthGuard";
import { RoleType } from "./types";


const Devices = lazy(() => import("./pages/Devices"));
const Process = lazy(() => import("./pages/Process"));
const Settings = lazy(() => import("./pages/Settings"));


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
              <Route index element={<Navigate to="/devices" replace />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthUserProvider>
    </ChakraProvider>
  );
}

export default App;
