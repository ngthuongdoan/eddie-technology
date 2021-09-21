const toCurrency = (currency: number): string => {
  return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(currency);
};

export { toCurrency };
