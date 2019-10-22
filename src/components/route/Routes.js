import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Devices from "../pages/Devices";
import Nurses from "../pages/Nurses";
import Operation from "../pages/Operation";
import WardSetting from "../pages/WardSetting";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Dashboard} />
        <Route path="/devices" component={Devices} />
        <Route path="/nurses" component={Nurses} />
        <Route path="/operations" component={Operation} />
        <Route path="/setting" component={WardSetting} />
      </Switch>
    );
  }
}
