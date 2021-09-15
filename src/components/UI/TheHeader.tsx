import React, { FunctionComponent } from 'react';
import TheBanner from '../Header/TheBanner';
import TheSearchbar from '../Header/TheSearchbar';

const TheHeader: FunctionComponent = (props): JSX.Element => {
  return (
    <>
      <TheBanner></TheBanner>
      <TheSearchbar></TheSearchbar>
    </>
  );
};

export default TheHeader;
