import React, { useCallback, useReducer, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
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

const filtersReducer = (state: PhoneFilters, action: { type: string; payload: string[] }) => {
  switch (action.type) {
    case 'BRAND': {
      if (action.payload !== undefined) {
        const newFilters = { ...state };
        newFilters.brands = [...action.payload];
        return newFilters;
      }
      return state;
    }
    case 'OS': {
      if (action.payload !== undefined) {
        const newFilters = { ...state };
        newFilters.os = [...action.payload];
        return newFilters;
      }
      return state;
    }
    case 'COLOR': {
      if (action.payload !== undefined) {
        const newFilters = { ...state };
        newFilters.colors = [...action.payload];
        return newFilters;
      }
      return state;
    }
    default:
      return state;
  }
};

const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);

  const { state } = useLocation<{ id: string }>();
  const { id: categoryId } = state;
  const { brand, os, color } = queryString.parse(useQuery(), { arrayFormat: 'comma' });
  const [filters, dispatchFilters] = useReducer(filtersReducer, {
    brands: [],
    colors: [],
    os: [],
  });

  useEffect(() => {
    if (brand) dispatchFilters({ type: 'BRAND', payload: [brand as string] });
    if (os) dispatchFilters({ type: 'OS', payload: [os as string] });
    if (color) dispatchFilters({ type: 'COLOR', payload: [color as string] });
  }, [brand, os, color]);

  const { data: products } = useFetch<Product[]>(useCallback(() => getAllProductsWithCategory(categoryId, filters), [categoryId, filters]));

  const handleFilterChange = (key: string, value: string) => {
    dispatchFilters({ type: key.toUpperCase(), payload: [value] });
  };

  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
        <div className="w-full min-h-screen py-10 bg-white">
          <FilterContainer onFilterChange={(key, value) => handleFilterChange(key, value)} className="px-10 mb-10"></FilterContainer>
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
