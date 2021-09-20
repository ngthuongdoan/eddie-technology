// src/AppRouter.tsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// TODO: Import pages to render
import ErrorLayout from '../layout/ErrorLayout';
import DefaultLayout from '../layout/DefaultLayout';
import UploadLayout from '../layout/UploadLayout';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path="/404" component={ErrorLayout} />
      <Route path="/upload" component={UploadLayout} />
      <Route path="/" component={DefaultLayout} />
    </Switch>
  );
};
export default AppRouter;
