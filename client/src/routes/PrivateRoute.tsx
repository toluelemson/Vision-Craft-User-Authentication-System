import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { RootStore } from '../store'

const PrivateRoute: React.FC<RouteProps | any> = ({
  component: Component,
  ...rest
}) => {
  const userLogin = useSelector((state: RootStore) => state.userLogin)
  const { userInfo } = userLogin
  const [isLogin] = useState(Boolean(userInfo))
  return (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/" />)}
    />
  )
}
export default PrivateRoute
