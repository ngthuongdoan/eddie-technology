import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';
import NoValue from '../../components/Common/NoValue';
import Loading from '../../components/UI/LoadingOverlay';
import useFetch from '../../hooks/use-fetch';
import { useQuery } from '../../hooks/use-query';
import Product from '../../model/Product';
import { getAllProductsWithCategory } from '../../services/product.service';
import ProductList from '../../components/Common/ProductList';
import FilterContainer from './FilterContainer';
import { RootState } from '../../model/ReduxType';
import { PhoneFilters } from '../../model/Filter';

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
