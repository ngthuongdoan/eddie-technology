import React from 'react';
import ClassNameProps from '../../model/ClassNameProps';
import Product, { ProductProps } from '../../model/Product';
import { toCurrency } from '../../utils';
import Card from '../UI/Card';

const ProductCard: React.FC<ProductProps & ClassNameProps> = ({ product, className }): JSX.Element => {
  const generatePrice = (p: Product): JSX.Element => {
    if (p.promotionPercent && p.promotionPrice) {
      // Have Promotion Price
      return (
        <>
          <p className="line-through mb-2 font-thin">{toCurrency(p.promotionPrice)}</p>
          <p>
            <span>{toCurrency(p.promotionPrice)}</span>
            <span className="ml-2 text-red-600">-{p.promotionPercent}%</span>
          </p>
        </>
      );
    }
    return (
      <>
        {' '}
        <p>{toCurrency(p.listedPrice)}</p>
      </>
    );
  };

  return (
    <Card className={`h-full m-5 ml-0  bg-white rounded-md shadow-md ${className}`}>
      <div className="bg-center bg-contain bg-no-repeat rounded-md w-full h-52" style={{ backgroundImage: `url(${product.images[0]})` }}></div>
      <div className="mx-5">
        <h3 className="font-light text-xs mt-5 mb-2">{product.name}</h3>
        <div className="italic font-bold text-text text-sm">{generatePrice(product)}</div>
      </div>
    </Card>
  );
};

export default ProductCard;
