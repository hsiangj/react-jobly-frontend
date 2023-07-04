import React, { useContext } from "react";
import UserContext from "../UserContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({children, exact, path}) => {
  const {currentUser} = useContext(UserContext);
  console.debug('PrivateRoute', 'current user=', currentUser)

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