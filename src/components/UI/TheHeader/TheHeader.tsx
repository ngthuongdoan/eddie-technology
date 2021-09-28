import React from 'react';
import TheBanner from '@components/Header/TheBanner/TheBanner';
import TheSearchbar from '@components/Header/TheSearchbar/TheSearchbar';

const TheHeader: React.FC = (props): JSX.Element => {
  return (
    <>
      <TheBanner></TheBanner>
      <TheSearchbar></TheSearchbar>
    </>
  );
};

export default TheHeader;
