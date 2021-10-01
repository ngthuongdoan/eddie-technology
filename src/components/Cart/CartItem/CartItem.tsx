import Price from '@components/Common/Price/Price';
import Product from '@model/Product';
import Card from '@components/UI/Card/Card';
import React from 'react';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { Link } from 'react-router-dom';
import { CartProduct } from '@model/Cart';
import { cartActions } from '@store/modules/cart/reducer';
import Button from '@components/UI/Button/Button';

interface Props {
  item: CartProduct;
}

const CartItem: React.FC<Props> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(cartActions.addProduct(item));
  };

  const removeItem = () => {
    dispatch(cartActions.removeProduct(item));
  };
  return (
    <Card className="flex items-center justify-start py-2 px-3">
      <Link className="flex items-center flex-grow w-full" to={`/product/${item.id}`}>
        <div className="bg-center bg-contain bg-no-repeat rounded-md w-32 h-32" style={{ backgroundImage: `url(${item.images[0]})` }}></div>
        <div className="w-full ml-10 ">
          <h1 className="font-bold text-black text-sm mb-2">{item.name}</h1>
          <Price className="font-thin text-xs" product={item}></Price>
        </div>
      </Link>
      <div className="flex items-center font-bold text-lg mr-10 gap-3">
        <Button className="item-button" onClick={removeItem}>
          -
        </Button>
        <p>{item.amount}</p>
        <Button className="item-button" onClick={addToCart}>
          +
        </Button>
      </div>
    </Card>
  );
};

export default CartItem;
