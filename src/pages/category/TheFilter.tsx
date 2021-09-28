import React, { useState } from 'react';
import Tag from '@components/UI/Tag/Tag';

interface Props {
  data: string[];
  label: string;
  onFilterChange: (value: string) => void;
}

const TheFilter: React.FC<Props> = (props): JSX.Element => {
  const [isClicked, setIsClicked] = useState<boolean[]>(Array(props.data.length).fill(false));

  const clicked = (d: string, index: number) => {
    setIsClicked((pre) => {
      const newState = Array(props.data.length).fill(false);
      newState[index] = !newState[index];
      return newState;
    });
    props.onFilterChange(d);
  };

  return (
    <ul className="list-none inline-flex gap-x-4 items-start justify-start">
      <li className="font-bold w-40">{props.label}</li>
      {props.data.map((d, index) => (
        <li onClick={() => clicked(d, index)} aria-hidden="true" key={d}>
          <Tag className="cursor-pointer" isClicked={isClicked[index]}>
            {d}
          </Tag>
        </li>
      ))}
    </ul>
  );
};

export default TheFilter;
