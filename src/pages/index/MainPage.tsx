/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../../components/UI/Card';
import MultipleItemsCarousel from './Carousel';
import MegaMenu from './MegaMenu';

const MainPage: React.FC = () => {
  return (
    <>
      <section>
        <div
          className="relative w-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/static/ads_2.webp)`,
            height: '500px',
          }}
        >
          <MegaMenu className="top-7 left-6 z-50"></MegaMenu>
        </div>
      </section>
      <section className="my-5 p-5">
        <Card className="py-5">
          <h1 className="ml-5">Thương hiệu nổi bật</h1>
          <MultipleItemsCarousel></MultipleItemsCarousel>
        </Card>
      </section>
    </>
  );
};

export default MainPage;
