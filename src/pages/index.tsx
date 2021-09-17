/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MegaMenu from '../components/UI/MegaMenu';

const Index: React.FC = () => {
  return (
    <>
      <section>
        <div className="relative w-full bg-center bg-cover" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/ads_2.webp)`, height: '500px' }}>
          <MegaMenu className="top-7 left-6 z-50"></MegaMenu>
        </div>
      </section>
    </>
  );
};

export default Index;
