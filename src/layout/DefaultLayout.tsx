import React, { FunctionComponent } from 'react';
import TheHeader from '../components/UI/TheHeader';
import TheFooter from '../components/UI/TheFooter';

const DefaultLayout: FunctionComponent = (props): JSX.Element => {
  return (
    <>
      <TheHeader />
      <main>{props.children}</main>
      <TheFooter />
    </>
  );
};

export default DefaultLayout;
