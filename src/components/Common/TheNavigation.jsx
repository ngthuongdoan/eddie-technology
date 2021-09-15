import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  items: Array<{}>,
  position: 'start' | 'center' | 'end',
  size: 'xs' | 'md' | 'lg' | 'xl',
  direction: 'horizontal' | 'vertical',
};

const TheNavigation: FunctionComponent = ({ items, position, size, direction, className }: Props): JSX.Element => {
  return (
    <>
      <ul className={`list-none w-full inline-flex items-center gap-5 justify-${position} ${className}`}>
        {items.map((item, index) => (
          <li key={index} className={`flex ${direction === 'vertical' && 'flex-col'} items-center justify-center gap-2 text-${size}`}>
            {item.icon && <FontAwesomeIcon icon={item.icon} size={size} />}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TheNavigation;
