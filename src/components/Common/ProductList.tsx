import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import ProductCard from './ProductCard';
import ClassNameProps from '../../model/ClassNameProps';
import Product from '../../model/Product';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props & ClassNameProps> = ({ products, className }): JSX.Element => {
  const [filterProducts, setFilterProducts] = useState<Product[]>();
  const perPage = 10;

  useEffect(() => {
    setFilterProducts([...products.slice(0, perPage)]);
  }, [products, perPage]);

  const onPageChange = (current: number, pageSize: number) => {
    setFilterProducts([...products.slice((current - 1) * pageSize, (current - 1) * pageSize + perPage)]);
  };

  return (
    <div>
      <div className={`grid grid-cols-5 grid-rows-2 gap-x-4 gap-y-6 mx-24 mb-10 ${className}`}>
        {filterProducts &&
          filterProducts.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`}>
              <ProductCard className="hover:shadow-inner" product={p} />
            </Link>
          ))}
      </div>
      {products?.length !== perPage && (
        <Pagination className="w-full text-center mb-5" pageSize={perPage} total={products?.length} onChange={onPageChange}></Pagination>
      )}
    </div>
  );
};

export default ProductList;
