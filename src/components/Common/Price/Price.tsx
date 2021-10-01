import ClassNameProps from '@model/ClassNameProps';
import Product from '@model/Product';
import { toCurrency } from '@utils/index';
import React, { useMemo } from 'react';

interface Props {
  product: Product;
}

const Price: React.FC<Props & ClassNameProps> = ({ product, className }): JSX.Element => {
  const listedPrice = useMemo(() => toCurrency(product.listedPrice), [product]);
  let content = (
    <>
      {' '}
      <p>{listedPrice}</p>
    </>
  );
  if (product.promotionPercent && product.promotionPrice) {
    content = (
      <>
        <p className="line-through mb-2 font-thin">{listedPrice}</p>
        <p>
          <span>{toCurrency(product.promotionPrice)}</span>
          <span className="ml-2 text-red-600">-{product.promotionPercent}%</span>
        </p>
      </>
    );
  }
  return <div className={className}>{content}</div>;
};

export default React.memo(Price);
