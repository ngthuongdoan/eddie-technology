import Price from '@app/components/Common/Price/Price';
import Product from '@app/model/Product';
import Card from '@components/UI/Card/Card';
import React from 'react';

interface Props {
  item: Product;
}

const CartItem: React.FC<Props> = ({ item }): JSX.Element => {
  return (
    <Card className="flex items-center justify-start">
      <div className="bg-center bg-contain bg-no-repeat rounded-md h-52" style={{ backgroundImage: `url(${item.images[0]})` }}></div>
      <div className="flex-grow">
        <h1 className="font-bold text-black text-sm">{item.name}</h1>
        <Price className="font-thin text-xs" product={item}></Price>
      </div>
    </Card>
  );
};

export default CartItem;
