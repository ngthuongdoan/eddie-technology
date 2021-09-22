import React, { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NoValue from '../../components/Common/NoValue';
import useFetch from '../../hooks/use-fetch';
import { useQuery } from '../../hooks/use-query';
import Product from '../../model/Product';
import { getAllProductsWithCategory } from '../../services/product.service';
import ProductList from './ProductList';
import TheFilter from './TheFilter';

interface Props {}

const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const { state } = useLocation<{ id: string }>();
  const { id: categoryId } = state;
  const query = useQuery();
  const brand = query.get('brand');
  const { data: products } = useFetch<Product>(useCallback(() => getAllProductsWithCategory(categoryId, { brand }), [categoryId, brand]));
  return (
    <>
      <TheFilter></TheFilter>
      {products && products.length !== 0 ? <ProductList className="" products={products}></ProductList> : <NoValue>Không có sản phẩm</NoValue>}
    </>
  );
};

export default CategoryPage;
