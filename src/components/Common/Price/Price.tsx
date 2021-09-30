import ClassNameProps from '@model/ClassNameProps';
import Product from '@model/Product';
import { toCurrency } from '@utils/index';
import React from 'react';

interface Props {
  product: Product;
}

const Price: React.FC<Props & ClassNameProps> = ({ product, className }): JSX.Element => {
  return (
    <div className={className}>
      {product.promotionPercent && product.promotionPrice ? (
        <>
          <p className="line-through mb-2 font-thin">{toCurrency(product.listedPrice)}</p>
          <p>
            <span>{toCurrency(product.promotionPrice)}</span>
            <span className="ml-2 text-red-600">-{product.promotionPercent}%</span>
          </p>
        </>
      ) : (
        <>
          {' '}
          <p>{toCurrency(product.listedPrice)}</p>
        </>
      )}
    </div>
  );
};

export default Price;
