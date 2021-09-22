import React from 'react';

interface Props {}

const NoValue: React.FC<Props> = (props): JSX.Element => {
  return <div className="w-full text-text text-xl font-bold italic text-center">{props.children}</div>;
};

export default NoValue;
