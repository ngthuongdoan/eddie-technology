import React from 'react';
import ClassNameProps from '@model/ClassNameProps';

interface Props {}

const Card: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

export default Card;
