import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppRouter from './router/AppRouter';
import store from './store';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Eddie Technology</title>
        <meta charSet="utf-8"></meta>
        <meta
          name="description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        />
        <meta property="og:title" content="Eddie Technology" />
        <meta property="og:site_name" content="Eddie Technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eddie-technology.web.app/" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="314" />
        <meta
          property="og:image:url"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        />
        <meta
          property="og:description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        />
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="https://eddie-technology.web.app/"></meta>
        <meta name="twitter:title" content="Eddie Technology"></meta>
        <meta
          name="twitter:description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        ></meta>
        <meta
          name="twitter:image:src"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        ></meta>
        <meta property="twitter:image:width" content="600" />
        <meta property="twitter:image:height" content="314" />
        <meta itemProp="name" content="Eddie Technology"></meta>
        <meta
          itemProp="description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        ></meta>
        <meta
          itemProp="image"
          content="https://firebasestorage.googleapis.com/v0/b/eddie-technology.appspot.com/o/og_image.png?alt=media&token=de1d9f8a-c37b-4b2d-8511-de446c34e790"
        ></meta>
        <meta property="image:width" content="600" />
        <meta property="image:height" content="314" />
        <link rel="canonical" href="https://eddie-technology.web.app"></link>
      </Helmet>
      <BrowserRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
