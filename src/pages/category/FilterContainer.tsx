import React from 'react';
import { PHONE_FILTERS } from '../../common/filters';
import ClassNameProps from '../../model/ClassNameProps';
import TheFilter from './TheFilter';

interface Props {
  onFilterChange: (key: string, value: string) => void;
}

const FilterContainer: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const criterias = PHONE_FILTERS;
  return (
    <div className={`${props.className}`}>
      <h1 className="font-bold text-black text-xl mb-5">Bộ lọc</h1>
      <div>
        {criterias && (
          <ul className="flex flex-col gap-y-2">
            <TheFilter
              data={criterias.brands!}
              onFilterChange={(value) => props.onFilterChange('brand', value)}
              label="Thương hiệu"
              key="brand"
            ></TheFilter>
            <TheFilter
              data={criterias.colors!}
              onFilterChange={(value) => props.onFilterChange('color', value)}
              label="Màu sắc"
              key="color"
            ></TheFilter>
            <TheFilter data={criterias.os!} onFilterChange={(value) => props.onFilterChange('os', value)} label="Hệ điều hành" key="os"></TheFilter>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterContainer;
