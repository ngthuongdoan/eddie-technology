import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import features from '../../common/features';
import TheNavigation from '../Common/TheNavigation';

const TheBanner: FunctionComponent = (props): JSX.Element => {
  return (
    <div className="banner">
      <TheNavigation items={features} position="end" size="xs" direction="horizontal"></TheNavigation>
    </div>
  );
};

export default TheBanner;
