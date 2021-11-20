import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Social from "./screens/social";
import Save from "./screens/saveInfo";
import GenerateQr from "./screens/generateQr";
import ScanQr from "./screens/scanQr";
import Show from "./screens/showSocial";

//import Login from "./screens/Login";
//<Route path="/login" children={<Login />} />

function Routes() {
  return (
    <Router basename="/shareQrSocialMedia">
      <Switch>
        <Route exact path="/" children={<Social />} />
        <Route path="/save" children={<Save />} />
        <Route path="/show" children={<Show />} />
        <Route path="/generate" children={<GenerateQr />} />
        <Route path="/scan" children={<ScanQr />} />
      </Switch>
    </Router>
  );
}

export default Routes;
