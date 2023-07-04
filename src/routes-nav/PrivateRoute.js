import React, { useContext, useEffect } from "react";
import UserContext from "../UserContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({children, exact, path}) => {
  const {currentUser} = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to='/login' />
  }
 

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default PrivateRoute;