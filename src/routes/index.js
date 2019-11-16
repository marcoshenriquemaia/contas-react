import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TabBottomNavigation from "../components/tab-bottom-navigation";
import DialerBigger from "../components/dialer-bigger";
import Expanses from "../pages/expanses";
import { AppProvider } from "../context/app-context"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppProvider>
          <Route exact path="/" component={Home} />
          <Route path="/dialer" component={DialerBigger} />
          <Route path="/expanses" component={Expanses} />
        </AppProvider>
      </Switch>
      <TabBottomNavigation />
    </BrowserRouter>
  );
};

export default Routes;
