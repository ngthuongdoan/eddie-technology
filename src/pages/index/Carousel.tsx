import React from 'react';
import Slider, { Settings } from 'react-slick';
import BRANDS from '@app/common/brands';
import Card from '@components/UI/Card/Card';

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
};

const MultipleItemsCarousel: React.FC = (): JSX.Element => {
  return (
    <div className="max-w-screen-xl">
      <Slider {...settings}>
        {BRANDS.map((brand) => (
          <Card key={brand.name} className="m-5 ml-0 px-5  shadow-none">
            <div className="bg-center bg-cover rounded-md w-68 h-32" style={{ backgroundImage: `url(${brand.logo})` }}></div>
            <h3 className="font-bold text-center mt-5">{brand.name}</h3>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItemsCarousel;
