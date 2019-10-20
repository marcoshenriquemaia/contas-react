import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TabBottomNavigation from "../components/tab-bottom-navigation";
import DialerBigger from "../components/dialer-bigger";
import Expanses from "../pages/expanses";
import {ExpansesProvider} from "../components/context-expanses";

const Routes = () => {
  const [expansesInformation, setExpansesInformation] = useState([]);

  return (
    <BrowserRouter>
      <Switch>
        <ExpansesProvider value={{setExpansesInformation, expansesInformation}}>
          <Route exact path="/" component={Home} />
          <Route path="/dialer" component={DialerBigger} />
          <Route path="/expanses" component={Expanses} />
        </ExpansesProvider>
      </Switch>
      <TabBottomNavigation />
    </BrowserRouter>
  );
};

export default Routes;
