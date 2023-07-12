import React from "react";
import { RoleType } from "../types";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthUserContext } from "../provider/AuthUser";

type Props = {
  component: React.ReactNode;
  redirect: string,
  allowroles?: RoleType[] 
}

export const RouteAuthGuard: React.FC<Props> = (props) => {
  const authUser = useAuthUserContext().user;
  const loc = useLocation();

  let allowRoute = false;

  if ( authUser ) {
    allowRoute = props.allowroles ? props.allowroles.includes(authUser.role) : true;
  }

  if (!allowRoute) {
    return <Navigate to={props.redirect} state={{from:loc}} replace={false} />
  }

  return <>{props.component}</>;

}
