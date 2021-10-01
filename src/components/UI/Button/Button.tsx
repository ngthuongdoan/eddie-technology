import ClassNameProps from '@model/ClassNameProps';
import React from 'react';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  onClick: () => void;
}

const Button: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  return (
    <button className={props.className} type={!props.type ? 'button' : 'submit'} form={props.form} onClick={props.onClick} aria-hidden="true">
      {props.children}
    </button>
  );
};

export default React.memo(Button);
