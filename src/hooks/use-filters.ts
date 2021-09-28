import React, { useReducer, useEffect } from 'react';

import { PhoneFilters } from '@model/Filter';

export enum FilterType {
  BRANDS = 'BRANDS',
  OS = 'OS',
  COLORS = 'COLORS',
  RESET = 'RESET',
}

const filtersReducer = (state: PhoneFilters, action: { type: string; payload?: string | undefined }) => {
  switch (action.type) {
    case FilterType.BRANDS: {
      if (action.payload !== undefined) {
        const newFilters = { ...state };
        newFilters.brands = action.payload;
        return newFilters;
      }
      return state;
    }
    case FilterType.OS: {
      if (action.payload !== undefined) {
        const newFilters = { ...state };
        newFilters.os = action.payload;
        return newFilters;
      }
      return state;
    }
    case FilterType.COLORS: {
      if (action.payload !== undefined) {
        const newFilters = { ...state };
        newFilters.colors = action.payload;
        return newFilters;
      }
      return state;
    }
    case FilterType.RESET: {
      return {};
    }
    default:
      return state;
  }
};

const useFilter = (query: PhoneFilters) => {
  const { brands, os, colors } = query;
  const [filters, dispatchFilters] = useReducer(filtersReducer, {
    brands: '',
    colors: '',
    os: '',
  });

  useEffect(() => {
    if (brands) dispatchFilters({ type: FilterType.BRANDS, payload: brands });
    if (os) dispatchFilters({ type: FilterType.OS, payload: os });
    if (query.colors) dispatchFilters({ type: FilterType.COLORS, payload: colors });
  }, [brands, os, colors]);

  return { filters, dispatchFilters };
};

export default useFilter;
