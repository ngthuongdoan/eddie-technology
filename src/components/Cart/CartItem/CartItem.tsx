import Price from '@components/Common/Price/Price';
import Product, { CartProduct } from '@model/Product';
import Card from '@components/UI/Card/Card';
import React from 'react';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { cartActions } from '@store/modules/cart/reducer';

interface Props {
  item: CartProduct;
}

const CartItem: React.FC<Props> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(cartActions.addProduct(item));
  };

  const removeItem = () => {
    dispatch(cartActions.removeProduct({ id: item.id }));
  };
  return (
    <Card className="flex items-center justify-start py-2 px-3">
      <div className="bg-center bg-contain bg-no-repeat rounded-md w-32 h-32" style={{ backgroundImage: `url(${item.images[0]})` }}></div>
      <div className="w-full ml-10 flex-grow">
        <h1 className="font-bold text-black text-sm mb-2">{item.name}</h1>
        <Price className="font-thin text-xs" product={item}></Price>
      </div>
      <div className="flex items-center font-bold text-lg mr-10 gap-3">
        <button className="bg-primary text-white font-bold p-1 rounded-full" type="button" onClick={() => removeItem()} aria-hidden="true">
          −
        </button>
        <p>{item.amount}</p>
        <button className="bg-primary text-white font-bold p-1 rounded-full" type="button" onClick={() => addToCart()} aria-hidden="true">
          +
        </button>
      </div>
    </Card>
  );
};

export default CartItem;
