import React from 'react';
import Slider, { Settings } from 'react-slick';
import Tag from '../../../components/UI/Tag';
import Product, { ProductProps } from '../../../model/Product';
import { toCurrency } from '../../../utils';

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
  const generatePrice = (p: Product): JSX.Element => {
    if (p.promotionPercent && p.promotionPrice) {
      return (
        <>
          <p className="line-through mb-2 font-thin">{toCurrency(p.promotionPrice)}</p>
          <p className="flex items-center ">
            <span>{toCurrency(p.promotionPrice)}</span>
            <Tag className="ml-3">-{p.promotionPercent}%</Tag>
          </p>
        </>
      );
    }
    return <p>{toCurrency(p.listedPrice)}</p>;
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
          <div className="italic font-bold text-primary text-2xl">{generatePrice(product)}</div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
