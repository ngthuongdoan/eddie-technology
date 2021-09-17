import React from 'react';
import TheBanner from '../Header/TheBanner';
import TheSearchbar from '../Header/TheSearchbar';

const TheHeader: React.FC = (props): JSX.Element => {
  return (
    <>
      <TheBanner></TheBanner>
      <TheSearchbar></TheSearchbar>
    </>
  );
};

export default TheHeader;
