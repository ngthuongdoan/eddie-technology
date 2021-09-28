import React from 'react';
import ClassNameProps from '@model/ClassNameProps';
import { ProductProps } from '@model/Product';
import Card from '@components/UI/Card/Card';
import Price from '../Price/Price';

const ProductCard: React.FC<ProductProps & ClassNameProps> = ({ product, className }): JSX.Element => {
  return (
    <Card className={`h-full m-5 ml-0 bg-white rounded-md shadow-md ${className}`}>
      <div className="bg-center bg-contain bg-no-repeat rounded-md w-full h-52" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
      <div className="mx-5">
        <h3 className="font-light text-xs mt-5 mb-2">{product.name}</h3>
        <Price className="italic font-bold text-primary text-sm" product={product}></Price>
      </div>
    </Card>
  );
};

export default ProductCard;
