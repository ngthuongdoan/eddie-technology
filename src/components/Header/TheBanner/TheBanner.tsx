import React from 'react';
import features from '@common/features';
import TheNavigation from '@components/Common/TheNavigation/TheNavigation';

const TheBanner: React.FC = (props): JSX.Element => {
  return (
    <div className="banner">
      <TheNavigation items={features} position="end" size="xs" direction="horizontal"></TheNavigation>
    </div>
  );
};

export default React.memo(TheBanner);
