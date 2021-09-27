import React from 'react';
import Tag from '../../components/UI/Tag';

interface Props {
  data: string[];
  label: string;
  onFilterChange: (value: string) => void;
}

const TheFilter: React.FC<Props> = (props): JSX.Element => {
  return (
    <ul className="list-none inline-flex gap-x-4 items-start justify-start">
      <li className="font-bold w-40">{props.label}</li>
      {props.data.map((d) => (
        <li onClick={() => props.onFilterChange(d)} aria-hidden="true" key={d}>
          <Tag className="cursor-pointer">{d}</Tag>
        </li>
      ))}
    </ul>
  );
};

export default TheFilter;
