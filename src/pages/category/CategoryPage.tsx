import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NoValue from '../../components/Common/NoValue';
import Loading from '../../components/UI/LoadingOverlay';
import useFetch from '../../hooks/use-fetch';
import { useQuery } from '../../hooks/use-query';
import Product from '../../model/Product';
import { getAllProductsWithCategory } from '../../services/product.service';
import { RootState } from '../../store';
import ProductList from './ProductList';
import TheFilter from './TheFilter';

interface Props {}

const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);

  const { state } = useLocation<{ id: string }>();
  const { id: categoryId } = state;
  const query = useQuery();
  const brand = query.get('brand');
  const { data: products } = useFetch<Product>(useCallback(() => getAllProductsWithCategory(categoryId, { brand }), [categoryId, brand]));
  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="w-full h-screen px-20 py-10">
          <TheFilter className=""></TheFilter>
          <div className="bg-gray-50 w-full h-full rounded-lg shadow-lg p-5">
            {products && (products as Product[]).length !== 0 ? (
              <ProductList className="" products={products as Product[]}></ProductList>
            ) : (
              <NoValue>Không có sản phẩm</NoValue>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
