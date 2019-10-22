import React, { Component } from "react";
import TopNavigation from "./components/common/TopNavigation";
import SideNavigation from "./components/common/SideNavigation";
import Routes from "./components/route/Routes";
import Dashboard from "./components/pages/Dashboard";
import WardSignin from "./components/pages/WardSignin";

function App() {
  return (
    <div className="App">
      <WardSignin />
    </div>
  );
}

export default App;
