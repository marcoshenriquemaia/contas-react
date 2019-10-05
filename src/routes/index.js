import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import WalletList from '../components/wallet-list'
import TabBottomNavigation from '../components/tab-bottom-navigation'
import DialerBigger from '../components/dialer-bigger'
import Expanses from '../pages/expanses'

const Routes = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/wallet' component={WalletList}/>
        <Route path='/dialer' component={DialerBigger}/>
        <Route path='/expanses' component={Expanses}/>
      </Switch>
      <TabBottomNavigation/>
    </BrowserRouter>
  )
}

export default Routes;