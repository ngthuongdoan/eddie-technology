import React from 'react';
import Slider, { Settings } from 'react-slick';
import Tag from '@components/UI/Tag/Tag';
import Product, { ProductProps } from '@model/Product';
import { toCurrency } from '@utils/index';
import Price from '@components/Common/Price/Price';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { cartActions } from '@store/modules/cart/reducer';

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  lazyLoad: 'progressive',
  autoplay: true,
  pauseOnHover: true,
};

const ProductOverview: React.FC<ProductProps> = ({ product }): JSX.Element => {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(cartActions.addProduct(product));
  };
  return (
    <>
      <div className="flex items-start justify-start gap-9 mb-20">
        <div className="w-1/2 h-96">
          <Slider {...settings}>
            {product.images.map((img) => (
              <div className="h-96 object-cover" key={img}>
                <div className="bg-center bg-contain bg-no-repeat rounded-md h-96 object-cover" style={{ backgroundImage: `url(${img})` }}></div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl">{product.name}</h1>
          <p className="font-bold italic text-sm text-text">
            <span>
              Thương hiệu: <span className="text-primary ml-1">{product.brand}</span>
            </span>
          </p>
          <Price className="italic font-bold text-primary text-2xl" product={product}></Price>
          <button
            className="font-bold text-white text-base px-3 py-2 rounded bg-red-700"
            type="button"
            onClick={() => addToCart()}
            aria-hidden="true"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
