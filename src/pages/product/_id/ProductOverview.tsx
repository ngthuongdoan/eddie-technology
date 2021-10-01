import React from 'react';
import Slider, { Settings } from 'react-slick';
import { useAlert } from 'react-alert';
import { ProductProps } from '@model/Product';
import Price from '@components/Common/Price/Price';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import { cartActions } from '@store/modules/cart/reducer';
import Button from '@components/UI/Button/Button';

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
  const alert = useAlert();

  const addToCart = () => {
    dispatch(cartActions.addProduct(product));
    alert.show(`Đã thêm ${product.name}`);
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
          <Button className="font-bold text-white text-base px-3 py-2 rounded bg-red-700" onClick={addToCart}>
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
