/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { FunctionComponent } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Index: FunctionComponent = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/static/ads_2.webp)`, height: '500px' }} className="w-full bg-center bg-cover" />
    </>
  );
};

export default Index;
