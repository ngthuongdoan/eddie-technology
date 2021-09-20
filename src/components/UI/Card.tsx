import React from 'react';

interface Props {
  className?: string;
}

const defaultProps: Props = {
  className: '',
};

const Card: React.FC<Props> = (props): JSX.Element => {
  return <div className={`card ${props.className}`}>{props.children}</div>;
};

Card.defaultProps = defaultProps;

export default Card;
