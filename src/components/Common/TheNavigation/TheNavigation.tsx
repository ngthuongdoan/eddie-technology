import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import Feature from '@model/Feature';
import { Link } from 'react-router-dom';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<Feature | string>;
  position: 'start' | 'center' | 'end';
  size: SizeProp;
  direction: 'horizontal' | 'vertical';
}

const justifyItem = (position: string) => {
  switch (position) {
    case 'start':
      return 'justify-start';
    case 'center':
      return 'justify-center';
    case 'end':
      return 'justify-end';
    default:
      return '';
  }
};
const TheNavigation: React.FC<Props> = (props): JSX.Element => {
  return (
    <>
      <ul className={`list-none w-full flex items-center gap-5 ${justifyItem(props.position)} ${props.className ? props.className : ''}`}>
        {props.items.map((item, index) => (
          <Link
            to={(item as Feature).path}
            key={index}
            className={`flex ${props.direction === 'vertical' ? 'flex-col' : ''} items-center cursor-pointer justify-center gap-2 text-${props.size}`}
          >
            {(item as Feature).icon && <FontAwesomeIcon icon={(item as Feature).icon} size={props.size} />}
            <span>{(item as Feature).title}</span>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default TheNavigation;
