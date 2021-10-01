import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Pagination from 'rc-pagination';
import ClassNameProps from '@model/ClassNameProps';
import Product from '@model/Product';
import ProductCard from '@components/Common/ProductCard/ProductCard';

interface Props {
  products: Product[];
  currentPage: number;
  onPageChange: (current: number) => void;
}

const ProductList: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const [filterProducts, setFilterProducts] = useState<Product[]>();
  const perPage = 10;
  const { products, currentPage, className } = props;
  useEffect(() => {
    const newPage = [...products.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage)];
    setFilterProducts(newPage);
  }, [products, perPage, currentPage]);

  const onPageChange = (current: number) => {
    props.onPageChange(current);
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
      {products && products.length !== perPage && (
        <Pagination
          className="w-full text-center mb-5"
          current={currentPage}
          pageSize={perPage}
          total={products.length}
          onChange={onPageChange}
        ></Pagination>
      )}
    </div>
  );
};

export default ProductList;
