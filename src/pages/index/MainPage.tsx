/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useState, useCallback, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from '../../components/UI/Card';
import Product from '../../model/Product';
import { getAllProducts } from '../../services/product.service';
import MultipleItemsCarousel from './Carousel';
import MegaMenu from './MegaMenu';

const toCurrency = (currency: number): string => {
  return Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(currency);
};

const MainPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const productDocs = await getAllProducts();
    setProducts([...productDocs]);
  }, []);

  const generatePrice = (p: Product): JSX.Element => {
    if (p.promotionPercent && p.promotionPrice) {
      return (
        <>
          {toCurrency(p.promotionPrice)}
          <span className="ml-2 text-red-600">-{p.promotionPercent}%</span>
        </>
      );
    }
    return <>{toCurrency(p.listedPrice)}</>;
  };
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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
      <section>
        <h1 className="text-3xl font-bold text-black text-center">Dành cho bạn</h1>
        <hr className="my-5 mx-24 h-1 bg-primary" />
        <div className="grid grid-cols-5 grid-rows-3 gap-4 mx-24">
          {products.map((p) => (
            <Card key={p.id} className="h-full m-5 ml-0 px-5 shadow-none">
              <div
                className="bg-center bg-cover rounded-md w-full h-full"
                style={{ backgroundImage: `url(${p.images[0]})` }}
              ></div>
              <h3 className="font-light text-xs mt-5 mb-2">{p.name}</h3>
              <p className="italic font-bold text-text text-sm">{generatePrice(p)}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainPage;
