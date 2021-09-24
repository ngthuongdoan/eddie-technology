import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import ProductCard from '../../components/Common/ProductCard';
import Product from '../../model/Product';
import { getAllProducts } from '../../services/product.service';
import useFetch from '../../hooks/use-fetch';
import 'rc-pagination/assets/index.css';

interface Props {}

const ProductSection: React.FC<Props> = (props): JSX.Element => {
  const { data: products } = useFetch<Product[]>(() => getAllProducts());
  const onPageChange = (current: number, pageSize: number) => {};

  return (
    <section>
      <h1 className="text-3xl font-bold text-black text-center">Dành cho bạn</h1>
      <hr className="my-5 mx-24 h-1 bg-primary" />
      <div className="grid grid-cols-5 grid-rows-3 gap-4 mx-24 mb-10">
        {products &&
          products.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`}>
              <ProductCard className="hover:shadow-inner" product={p} />
            </Link>
          ))}
      </div>
      <Pagination className="w-full text-center" total={products?.length} onChange={onPageChange}></Pagination>
    </section>
  );
};

export default ProductSection;
