import React from 'react';

interface Props {
  className: string;
}

const Tag: React.FC<Props> = (props): JSX.Element => {
  return <div className={`${props.className} tag`}>{props.children}</div>;
};

export default Tag;
