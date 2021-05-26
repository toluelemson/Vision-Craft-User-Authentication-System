import React, { ReactElement } from 'react'
import { Switch } from 'react-router-dom'
import LoginScreen from '../views/Login.screen'
import RegisterScreen from '../views/Register.screen'
import Dashboard from '../views/Dashboard.screen'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function AppRoutes(): ReactElement {
  return (
    <div className="App">
      <Switch>
        <PublicRoute restricted exact path="/" component={LoginScreen} />
        <PublicRoute restricted path="/register" component={RegisterScreen} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  )
}

export default AppRoutes
