import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TabBottomNavigation from "../components/tab-bottom-navigation";
import DialerBigger from "../components/dialer-bigger";
import Expanses from "../pages/expanses";
import {ExpansesProvider} from "../components/context-expanses";

const Routes = () => {
  const wallet = {
    _Id: '1',
    title: "Itau",
    name: "Marcos",
    value: 1050.25,
    icon: "wallet",
    color: "blue"
  };

  const [expansesInformation, setExpansesInformation] = useState([]);
  const [arrayWallet, setArrayWallet] = useState([
    wallet,
    { ...wallet, title: "Nubank", name: "Sabrina", value: 1050.25, color: "purple",_Id: '2' },
    { ...wallet, title: "Santander", color: "red", _Id: '3' }
  ]);

  return (
    <BrowserRouter>
      <Switch>
        <ExpansesProvider value={{setExpansesInformation, expansesInformation, arrayWallet, setArrayWallet}}>
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
