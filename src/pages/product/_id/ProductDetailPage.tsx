import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Product from '../../../model/Product';
import { getProduct } from '../../../services/product.service';
import ProductDescription from './ProductDescription';
import ProductOverview from './ProductOverview';
import ProductSpecification from './ProductSpecification';

const ProductDetail: React.FC = (props): JSX.Element => {
  const params: { id: string } = useParams();
  const [product, setProduct] = useState<Product>();
  const history = useHistory();

  const fetchProduct = useCallback(async () => {
    const response = await getProduct(params.id);
    if (response) {
      setProduct(response as Product);
    } else {
      history.replace('/');
    }
  }, [params, history]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <>
      {product && (
        <div className="bg-white mx-14 my-5 p-10 rounded-lg shadow-lg">
          <ProductOverview product={product} />
          <div className="flex items-start justify-start gap-10">
            <ProductDescription className="flex-grow" product={product}></ProductDescription>
            <ProductSpecification className="" product={product}></ProductSpecification>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
