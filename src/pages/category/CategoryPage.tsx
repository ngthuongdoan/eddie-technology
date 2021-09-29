import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import NoValue from '@components/Common/NoValue/NoValue';
import Loading from '@components/UI/LoadingOverlay/LoadingOverlay';
import useFetch from '@hooks/use-fetch';
import { useQuery } from '@hooks/use-query';
import Product from '@model/Product';
import { getAllProductsWithCategory } from '@services/product.service';
import ProductList from '@components/Common/ProductList/ProductList';
import { RootState } from '@model/ReduxType';
import { PhoneFilters } from '@model/Filter';
import FilterContainer from './FilterContainer';

interface Props {}

const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);

  const { categoryId } = useParams<{ categoryId: string }>();
  const query = useQuery();
  const { brands, colors, os, page } = useMemo(() => queryString.parse(query, { arrayFormat: 'comma' }), [query]);
  const { data: products } = useFetch<Product[]>(
    useCallback(() => getAllProductsWithCategory(categoryId, { brands, colors, os } as PhoneFilters), [categoryId, brands, colors, os])
  );

  const history = useHistory();
  const onPageChange = (current: number) => {
    history.push(`${history.location.pathname}?${queryString.stringify({ brands, colors, os, page: current })}`);
  };

  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="w-full min-h-screen py-10 bg-white">
          <FilterContainer className="px-10 mb-10"></FilterContainer>
          <hr className="w-full bg-background h-5" />
          {products && (products as Product[]).length !== 0 ? (
            <ProductList onPageChange={onPageChange} currentPage={!page ? 1 : +page} products={products as Product[]}></ProductList>
          ) : (
            <NoValue>Không có sản phẩm</NoValue>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
