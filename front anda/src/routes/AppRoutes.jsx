import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";


const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} /> 
      </Switch>
    </Router>
  );
};

export default AppRoutes;
