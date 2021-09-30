import React, { Suspense, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import TheHeader from '@components/UI/TheHeader/TheHeader';
import TheFooter from '@components/UI/TheFooter/TheFooter';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { asyncData } from '@store/modules/cached/action';
import { transitions, positions, AlertProviderProps, Provider as AlertProvider, types } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const MainPage = React.lazy(() => import('@pages/index/MainPage'));
const ProductDetailPage = React.lazy(() => import('@pages/product/_id/ProductDetailPage'));
const CategoryPage = React.lazy(() => import('@pages/category/CategoryPage'));
const CartPage = React.lazy(() => import('@pages/cart/CartPage'));
const CheckoutPage = React.lazy(() => import('@pages/checkout/CheckoutPage'));

// optional configuration
const options: AlertProviderProps = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: '30px',
  template: AlertTemplate,
  type: types.SUCCESS,
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const DefaultLayout: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(asyncData());
  }, [dispatch]);

  return (
    <>
      <AlertProvider {...options}>
        <TheHeader />
        <main>
          <Suspense fallback={<></>}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route exact path="/product/:id" component={ProductDetailPage} />
              <Route exact path="/category/:categoryId" component={CategoryPage} />
              <Route path="/*">
                <Redirect to="/404"></Redirect>
              </Route>
            </Switch>
          </Suspense>
        </main>
        <TheFooter />
      </AlertProvider>
    </>
  );
};

export default DefaultLayout;
