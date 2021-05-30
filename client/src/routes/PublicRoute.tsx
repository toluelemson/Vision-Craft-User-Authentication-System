import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import isLogin from '../utils/isLogin'

const PublicRoute: React.FC<RouteProps | any> = ({
  component: Component,
  restricted,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props:any) => (isLogin() && restricted ? (
      <Redirect to="/dashboard" />
    ) : (
      <Component {...props} />
    ))}
  />
)

export default PublicRoute
