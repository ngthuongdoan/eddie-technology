// src/AppRouter.tsx
import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

// TODO: Import pages to render
import ErrorLayout from '../layout/ErrorLayout';
import DefaultLayout from '../layout/DefaultLayout';

const AppRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/404" component={ErrorLayout} />
      <Route path="/" component={DefaultLayout} />
    </Switch>
  );
};
export default AppRouter;
