import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import TabBottomNavigation from "../components/tab-bottom-navigation";
import DialerBigger from "../pages/dialer-bigger";
import Expanses from "../pages/expanses";
import { AppProvider } from "../context/app-context";
import RootReducer from "../reducers/root-reducer";
import api from "../services/api";

const apiBoot = async ({ id }) => {
  const apiUsersInformations = await api.get("/users");
  const [user] = apiUsersInformations.data.filter(info => info.id === id);
  return user;
};

const Routes = () => {
  const [store, setStore] = useReducer(RootReducer, {});

  useEffect(() => {
    apiBoot({ id: 1 }).then(data => {
      setStore({ type: "BOOT", payload: data });
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <AppProvider value={{ store, setStore }}>
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
