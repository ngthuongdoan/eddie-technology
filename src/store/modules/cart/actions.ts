import { CartProduct } from '@model/Cart';
import { AppDispatch } from '@model/ReduxType';
import { cartActions } from './reducer';

export const addToCartAction = (payload: CartProduct) => (dispatch: AppDispatch) => {
  dispatch(cartActions.addProduct(payload));
  return Promise.resolve();
};
