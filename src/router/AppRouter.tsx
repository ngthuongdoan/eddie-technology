// src/AppRouter.tsx
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
// TODO: Import pages to render
import Index from '../pages/index';

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </Provider>
      </Router>
    </Router>
  );
};
export default AppRouter;
