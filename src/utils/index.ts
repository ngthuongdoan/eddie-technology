import React from 'react';

const toCurrency = (currency: number): string => {
  return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(currency);
};
function removeNullAndUndefined<T>(obj: T): T {
  return Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {} as T);
}

export { toCurrency, removeNullAndUndefined };
