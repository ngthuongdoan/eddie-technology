/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useState, useCallback, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/Common/ProductCard';
import Card from '../../components/UI/Card';
import Product from '../../model/Product';
import { getAllProducts } from '../../services/product.service';
import MultipleItemsCarousel from './Carousel';
import MegaMenu from '../../components/Common/MegaMenu';
import useFetch from '../../hooks/use-fetch';
import { RootState } from '../../store';
import Loading from '../../components/UI/LoadingOverlay';

const MainPage: React.FC = () => {
  const isLoading = useSelector<RootState>((state) => state.loading.isLoading);

  const { data: products } = useFetch<Product>(getAllProducts);
  return (
    <>
      {isLoading && <Loading></Loading>}
      {!isLoading && (
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
          <section>
            <h1 className="text-3xl font-bold text-black text-center">Dành cho bạn</h1>
            <hr className="my-5 mx-24 h-1 bg-primary" />
            <div className="grid grid-cols-5 grid-rows-3 gap-4 mx-24">
              {products &&
                (products! as Product[]).map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`}>
                    <ProductCard className="hover:shadow-inner" product={p} />
                  </Link>
                ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default MainPage;
