import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TheHeader from '../components/UI/TheHeader';
import TheFooter from '../components/UI/TheFooter';

const MainPage = React.lazy(() => import('../pages/index/MainPage'));
const Services = React.lazy(() => import('../pages/services/Services'));
const Contact = React.lazy(() => import('../pages/contact/Contact'));

const DefaultLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <TheHeader />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/*">
              <Redirect to="/404"></Redirect>
            </Route>
          </Switch>
        </Suspense>
      </main>
      <TheFooter />
    </>
  );
};

export default DefaultLayout;
