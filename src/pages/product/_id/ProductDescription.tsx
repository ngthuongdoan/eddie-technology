import React from 'react';
import DOMPurify from 'dompurify';
import { ProductProps } from '../../../model/Product';

const ProductDescription: React.FC<ProductProps> = ({ product }): JSX.Element => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-8">Mô tả sản phẩm</h1>
      <div
        className="description"
        // eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}
      ></div>
      ;
    </div>
  );
};

export default ProductDescription;
