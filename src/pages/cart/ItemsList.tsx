import CartItem from '@components/Cart/CartItem/CartItem';
import NoValue from '@components/Common/NoValue/NoValue';
import { CartProduct } from '@model/Product';
import { RootState } from '@model/ReduxType';
import React from 'react';
import { useSelector } from 'react-redux';

interface Props {}

const ItemsList: React.FC<Props> = (props): JSX.Element => {
  const products = useSelector<RootState>((state) => state.cart.products) as CartProduct[];
  return (
    <>
      {products.length === 0 && <NoValue>Không có sản phẩm nào trong giỏ</NoValue>}
      {products.length !== 0 && products.map((product) => <CartItem key={product.id} item={product}></CartItem>)}
    </>
  );
};

export default ItemsList;
