import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import Feature from '../../model/Feature';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<Feature | string>;
  position: 'start' | 'center' | 'end';
  size: SizeProp;
  direction: 'horizontal' | 'vertical';
}

const TheNavigation: React.FC<Props> = (props): JSX.Element => {
  const justifyItem = () => {
    switch (props.position) {
      case 'start':
        return 'justify-start';
      case 'center':
        return 'justify-center';
      case 'end':
        return 'justify-end';
    }
    return '';
  };

  return (
    <>
      <ul className={`list-none w-full flex items-center gap-5 ${justifyItem()} ${props.className ? props.className : ''}`}>
        {props.items.map((item, index) => (
          <li key={index} className={`flex ${props.direction === 'vertical' ? 'flex-col' : ''} items-center cursor-pointer justify-center gap-2 text-${props.size}`}>
            {(item as Feature).icon && <FontAwesomeIcon icon={(item as Feature).icon} size={props.size} />}
            <span>{(item as Feature).title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TheNavigation;
