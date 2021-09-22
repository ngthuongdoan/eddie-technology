import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TheHeader from '../components/UI/TheHeader';
import TheFooter from '../components/UI/TheFooter';

const MainPage = React.lazy(() => import('../pages/index/MainPage'));
const ProductDetailPage = React.lazy(() => import('../pages/product/_id/ProductDetailPage'));
const CategoryPage = React.lazy(() => import('../pages/category/CategoryPage'));

const DefaultLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <TheHeader />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/product/:id" component={ProductDetailPage} />
            <Route exact path="/category/:slug" component={CategoryPage} />
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
