import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Social from "./screens/social";
import Save from "./screens/saveInfo";

//import Login from "./screens/Login";
//<Route path="/login" children={<Login />} />


function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Social />} />
        <Route path="/save" children={<Save />} />
        
      </Switch>
    </Router>
  );
}

export default Routes;