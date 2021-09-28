import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '@components/UI/LoadingOverlay/LoadingOverlay';
import useFetch from '@hooks/use-fetch';
import Product from '@model/Product';
import { RootState } from '@model/ReduxType';
import { getProduct } from '@services/product.service';
import ProductDescription from './ProductDescription';
import ProductOverview from './ProductOverview';
import ProductSpecification from './ProductSpecification';

const ProductDetail: React.FC = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);

  const params: { id: string } = useParams();

  const { data: product } = useFetch<Product>(useCallback(() => getProduct(params.id), [params]));

  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && product && (
        <div className="bg-white mx-14 my-5 p-10 rounded-lg shadow-lg">
          <ProductOverview product={product as Product} />
          <div className="flex items-start justify-start gap-10">
            <ProductDescription product={product as Product}></ProductDescription>
            <ProductSpecification product={product as Product}></ProductSpecification>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
