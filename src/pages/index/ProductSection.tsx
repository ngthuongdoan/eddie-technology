import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import { RootState } from '../../model/ReduxType';
import ProductCard from '../../components/Common/ProductCard';
import Product from '../../model/Product';
import 'rc-pagination/assets/index.css';

interface Props {}

const ProductSection: React.FC<Props> = (props): JSX.Element => {
  const [products, setProducts] = useState<Product[]>();
  const perPage = 10;
  const promoteProducts = useSelector<RootState>((state) => state.cached.promoteProducts) as Product[];

  useEffect(() => {
    setProducts([...promoteProducts.slice(0, perPage)]);
  }, [promoteProducts, perPage]);

  const onPageChange = (current: number, pageSize: number) => {
    setProducts([...promoteProducts.slice(current * pageSize, current * pageSize + perPage)]);
  };

  return (
    <section>
      <h1 className="text-3xl font-bold text-black text-center">Dành cho bạn</h1>
      <hr className="my-5 mx-24 h-1 bg-primary" />
      <div className="grid grid-cols-5 grid-rows-2 gap-4 mx-24 mb-10">
        {products &&
          products.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`}>
              <ProductCard className="hover:shadow-inner" product={p} />
            </Link>
          ))}
      </div>
      <Pagination className="w-full text-center" pageSize={perPage} total={promoteProducts?.length} onChange={onPageChange}></Pagination>
    </section>
  );
};

export default ProductSection;
