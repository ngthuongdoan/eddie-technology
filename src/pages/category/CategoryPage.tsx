import React, { useCallback, useReducer, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NoValue from '../../components/Common/NoValue';
import Loading from '../../components/UI/LoadingOverlay';
import useFetch from '../../hooks/use-fetch';
import { useQuery } from '../../hooks/use-query';
import Product from '../../model/Product';
import { getAllProductsWithCategory } from '../../services/product.service';
import ProductList from '../../components/Common/ProductList';
import FilterContainer from './FilterContainer';
import { RootState } from '../../model/ReduxType';
import { Filters } from '../../model/Filter';

interface Props {}

const filtersReducer = (state: Filters, action: { type: string; payload: string[] }) => {
  switch (action.type) {
    case 'BRAND': {
      const newFilters = { ...state };
      newFilters.brands?.push(...action.payload);
      console.log('🚀 --------------------------------------------------------------------');
      console.log('🚀 ~ file: CategoryPage.tsx ~ line 21 ~ filtersReducer ~ state', newFilters);
      console.log('🚀 --------------------------------------------------------------------');
      return newFilters;
    }
    default:
      return state;
  }
};
const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);

  const { state } = useLocation<{ id: string }>();
  const { id: categoryId } = state;
  const query = useQuery();
  const brand = query.get('brand');
  const [filters, dispatchFilters] = useReducer(filtersReducer, {
    brands: [],
    colors: [],
    os: [],
  });

  useEffect(() => {
    if (brand) dispatchFilters({ type: 'BRAND', payload: [brand] });
  }, [brand]);

  const { data: products } = useFetch<Product[]>(useCallback(() => getAllProductsWithCategory(categoryId, filters), [categoryId, filters]));
  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="w-full min-h-screen py-10 bg-white">
          {products && (products as Product[]).length !== 0 ? (
            <>
              <FilterContainer categoryId={categoryId} className="px-10 mb-10"></FilterContainer>
              <hr className="w-full bg-background h-5" />
              <ProductList className="" products={products as Product[]}></ProductList>
            </>
          ) : (
            <NoValue>Không có sản phẩm</NoValue>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryPage;
