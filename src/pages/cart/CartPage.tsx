import NoValue from '@components/Common/NoValue/NoValue';
import { Cart } from '@model/Cart';
import { RootState } from '@model/ReduxType';
import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutInformation from './CheckoutInformation';
import ItemsList from './ItemsList';

interface Props {}

const CartPage: React.FC<Props> = (props): JSX.Element => {
  const cart = useSelector<RootState>((state) => state.cart) as Cart;

  return (
    <div className="bg-white py-10 px-20">
      <h1 className="font-bold text-2xl text-left">Giỏ hàng của bạn</h1>
      <hr className="h-1 bg-primary rounded-full my-4" />
      {cart.products.length === 0 && <NoValue>Không có sản phẩm nào trong giỏ</NoValue>}
      {cart.products.length !== 0 && (
        <div className="flex items-start w-full gap-10">
          <ItemsList products={cart.products} className="flex-grow"></ItemsList>
          <CheckoutInformation cart={cart} className="w-4/12"></CheckoutInformation>
        </div>
      )}
    </div>
  );
};

export default CartPage;
