import CartItem from '@components/Cart/CartItem/CartItem';
import { CartProduct } from '@model/Cart';
import ClassNameProps from '@model/ClassNameProps';
import React from 'react';

interface Props {
  products: CartProduct[];
}

const ItemsList: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  return (
    <div className={props.className}>
      {props.products.map((product) => (
        <CartItem key={product.id} item={product}></CartItem>
      ))}
    </div>
  );
};

export default ItemsList;
