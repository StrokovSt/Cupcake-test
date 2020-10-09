import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { MainPage } from './pages/mainPage'
import { CartPage } from './pages/cartPage'

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="/cart">
        <CartPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}