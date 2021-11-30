import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import FoodDetails from "./Components/FoodDetails/FoodDetails";
import NavBar from "./Components/NavBar/NavBar";
import Shipment from "./Components/Shipment/Shipment";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
export const userLoginData = createContext();

function App() {
  const[loginData, setLoginData] = useState({});
  return (
    <userLoginData.Provider value={[loginData,setLoginData]}>
       <Router>
        <NavBar/>
          <Switch>
           <Route path="/home">
             <Header></Header>

           </Route>
            <Route path="/login"> 
                <Login></Login>
            </Route>
             <Route path="/fooddetails/:id">
               <FoodDetails></FoodDetails>
             </Route>
             <PrivateRoute>
                <Shipment></Shipment>
             </PrivateRoute>
            <Route exact path="/">
              <Header></Header>
            </Route>
          </Switch>
       </Router>
    </userLoginData.Provider>
  );
}

export default App;
