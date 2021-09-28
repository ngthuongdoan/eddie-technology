import React, { Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TheHeader from '@components/UI/TheHeader/TheHeader';
import TheFooter from '@components/UI/TheFooter/TheFooter';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { asyncData } from '@store/modules/cached/action';

const MainPage = React.lazy(() => import('@pages/index/MainPage'));
const ProductDetailPage = React.lazy(() => import('@pages/product/_id/ProductDetailPage'));
const CategoryPage = React.lazy(() => import('@pages/category/CategoryPage'));
const CartPage = React.lazy(() => import('@pages/cart/CartPage'));

const DefaultLayout: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncData());
  }, [dispatch]);

  return (
    <>
      <TheHeader />
      <main>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/product/:id" component={ProductDetailPage} />
            <Route exact path="/category/:categoryId" component={CategoryPage} />
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
