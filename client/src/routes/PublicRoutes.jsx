import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import AuthRoutes from '../views/Auth';
// import { About, NotFound } from '../views';
// import { PublicLayout } from './Layout';
import LoginEmailView from '../views/Login.screen';

/**
 * List of routes available only for anonymous users
 * Also renders the "Public Layout" composition
 */
const PublicRoutes = () => (
  <>
    <Switch>
      <Route path="/" exact component={LoginEmailView} />
      {/* <Route path="/auth" component={AuthRoutes} />
      <Route path="/about" component={About} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  </>
);

export default PublicRoutes;
