import React from 'react';
import ClassNameProps from '@model/ClassNameProps';

interface Props {
  isClicked?: boolean;
}
const defaultProps = {
  isClicked: false,
};
const Tag: React.FC<Props & ClassNameProps> = ({ className, isClicked, children }): JSX.Element => {
  return <div className={`tag ${className} ${isClicked && 'tag--active'}`}>{children}</div>;
};

Tag.defaultProps = defaultProps;
export default Tag;
