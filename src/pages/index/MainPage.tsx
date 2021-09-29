import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useSelector } from 'react-redux';
import Card from '@components/UI/Card/Card';
import MegaMenu from '@components/Common/MegaMenu/MegaMenu';
import ProductList from '@components/Common/ProductList/ProductList';
import { RootState } from '@model/ReduxType';
import Product from '@model/Product';
import MultipleItemsCarousel from './Carousel';

const MainPage: React.FC = () => {
  const promoteProducts = useSelector<RootState>((state) => state.cached.promoteProducts) as Product[];

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
        <Card className="pt-5 pb-8">
          <h1 className="ml-5">Thương hiệu nổi bật</h1>
          <MultipleItemsCarousel></MultipleItemsCarousel>
        </Card>
      </section>
      <ProductList onPageChange={() => {}} currentPage={1} products={promoteProducts as Product[]}></ProductList>
    </>
  );
};

export default MainPage;
