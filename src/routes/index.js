import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TabBottomNavigation from "../components/tab-bottom-navigation";
import DialerBigger from "../components/dialer-bigger";
import Expanses from "../pages/expanses";
import {ExpansesProvider} from "../components/context-expanses";
import api from '../services/api';


const Routes = () => {
  const [expansesInformation, setExpansesInformation] = useState([]);
  const [arrayWallet, setArrayWallet] = useState([]);

  useEffect(async function(){
    const walletList = await api.get('/users');
    setArrayWallet(walletList.data[0].wallet);
  },[])

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
