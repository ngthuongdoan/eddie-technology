import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import AppRouter from './router/AppRouter';
import store from './store';

const App = () => {
  return (
    <>
      <MetaTags>
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
        <meta property="og:image" content="https://eddie-technology.web.app/og_image.jpg" />
        <meta property="og:image:url" content="https://eddie-technology.web.app/og_image.jpg" />
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
        <meta name="twitter:image:src" content="https://eddie-technology.web.app/og_image.jpg"></meta>
        <meta itemProp="name" content="Eddie Technology"></meta>
        <meta
          itemProp="description"
          content="Eddie Technology provides you a lot of technology product of famous brands like Dell, Asus, Acer, MSI, Macbook, Apple, Samsung,... We provide excellent services and affordable price for you"
        ></meta>
        <meta itemProp="image" content="https://eddie-technology.web.app/og_image.jpg"></meta>
        <link rel="canonical" href="https://eddie-technology.web.app"></link>
      </MetaTags>
      <BrowserRouter>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
