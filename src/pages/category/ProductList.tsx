import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/Common/ProductCard';
import ClassNameProps from '../../model/ClassNameProps';
import Product from '../../model/Product';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props & ClassNameProps> = ({ products, className }): JSX.Element => {
  return (
    <div className={`grid grid-cols-5 grid-rows-3 gap-4 mx-24 ${className}`}>
      {products.map((p) => (
        <Link key={p.id} to={`/product/${p.id}`}>
          <ProductCard className="hover:shadow-inner" product={p} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
