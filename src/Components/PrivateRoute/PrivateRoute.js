import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import {userLoginData} from "../../App";
const PrivateRoute = ({ children, ...rest }) => {
     const[loginData, setLoginData] = useContext(userLoginData) 
    return (
        <div>
         <Route
      {...rest}
      render={({ location }) =>
        loginData.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />   
        </div>
    );
};

export default PrivateRoute;