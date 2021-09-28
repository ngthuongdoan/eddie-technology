import React from 'react';
import CheckoutInformation from './CheckoutInformation';
import ItemsList from './ItemsList';

interface Props {}

const CartPage: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="bg-white py-10 px-20">
      <h1 className="font-bold text-2xl text-left">Giỏ hàng của bạn</h1>
      <hr className="h-1 bg-primary rounded-full my-4" />
      <ItemsList></ItemsList>
      <CheckoutInformation></CheckoutInformation>
    </div>
  );
};

export default CartPage;
