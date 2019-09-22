import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/home'
import WalletList from '../components/wallet-list'
import TabBottomNavigation from '../components/tab-bottom-navigation'

const Routes = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/> 
        <Route path='/wallet' component={WalletList}/>
      </Switch>
      <TabBottomNavigation/>
    </BrowserRouter>
  )
}

export default Routes;