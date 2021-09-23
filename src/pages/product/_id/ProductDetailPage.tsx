import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Product from '../../../model/Product';
import { getProduct } from '../../../services/product.service';
import { RootState, useAppDispatch } from '../../../store';
import { loadingActions } from '../../../store/modules/loading';
import ProductDescription from './ProductDescription';
import ProductOverview from './ProductOverview';
import ProductSpecification from './ProductSpecification';

const ProductDetail: React.FC = (props): JSX.Element => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);
  const dispatch = useAppDispatch();

  const params: { id: string } = useParams();
  const [product, setProduct] = useState<Product>();
  const history = useHistory();

  const fetchProduct = useCallback(async () => {
    dispatch(loadingActions.loading());
    const response = await getProduct(params.id);
    if (response) {
      setProduct(response as Product);
      dispatch(loadingActions.loaded());
    } else {
      history.replace('/');
    }
  }, [params, history, dispatch]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <>
      {!isLoading && product && (
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
