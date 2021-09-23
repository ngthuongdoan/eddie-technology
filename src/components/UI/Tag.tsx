import React from 'react';
import ClassNameProps from '../../model/ClassNameProps';

interface Props {}

const Tag: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  return <div className={`tag ${props.className}`}>{props.children}</div>;
};

export default Tag;
