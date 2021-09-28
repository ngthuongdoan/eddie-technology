import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import NoValue from '@components/Common/NoValue/NoValue';
import Loading from '@components/UI/LoadingOverlay/LoadingOverlay';
import useFetch from '@app/hooks/use-fetch';
import { useQuery } from '@app/hooks/use-query';
import Product from '@app/model/Product';
import { getAllProductsWithCategory } from '@app/services/product.service';
import ProductList from '@components/Common/ProductList/ProductList';
import { RootState } from '@app/model/ReduxType';
import { PhoneFilters } from '@app/model/Filter';
import FilterContainer from './FilterContainer';

interface Props {}

const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);

  const { categoryId } = useParams<{ categoryId: string }>();
  const query = useQuery();
  const filters = useMemo(() => queryString.parse(query, { arrayFormat: 'comma' }), [query]);

  const { data: products } = useFetch<Product[]>(
    useCallback(() => getAllProductsWithCategory(categoryId, filters as PhoneFilters), [categoryId, filters])
  );

  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="w-full min-h-screen py-10 bg-white">
          <FilterContainer className="px-10 mb-10"></FilterContainer>
          <hr className="w-full bg-background h-5" />
          {products && (products as Product[]).length !== 0 ? (
            <ProductList className="" products={products as Product[]}></ProductList>
          ) : (
            <NoValue>Không có sản phẩm</NoValue>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
