import CartItem from '@components/Cart/CartItem/CartItem';
import React from 'react';

interface Props {}

const ItemsList: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <CartItem></CartItem>
    </>
  );
};

export default ItemsList;
