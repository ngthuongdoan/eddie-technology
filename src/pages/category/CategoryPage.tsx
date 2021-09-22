import React, { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NoValue from '../../components/Common/NoValue';
import { useQuery } from '../../hooks/use-query';
import Product from '../../model/Product';
import { getAllProductsWithCategory } from '../../services/product.service';
import ProductList from './ProductList';
import TheFilter from './TheFilter';

interface Props {}

const CategoryPage: React.FC<Props> = (props): JSX.Element => {
  const { state } = useLocation<{ id: string }>();
  const { id: categoryId } = state;
  const [products, setProducts] = useState<Product[]>();
  const query = useQuery();
  const brand = query.get('brand');
  // Init product data
  const fetchProducts = useCallback(async () => {
    const productsDocs = await getAllProductsWithCategory(categoryId, { brand });
    setProducts([...productsDocs]);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <TheFilter></TheFilter>
      {products && products.length !== 0 ? <ProductList className="" products={products}></ProductList> : <NoValue>Không có sản phẩm</NoValue>}
    </>
  );
};

export default CategoryPage;
