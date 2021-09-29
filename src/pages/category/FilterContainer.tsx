import React, { useMemo, useState } from 'react';
import queryString from 'query-string';
import { useHistory } from 'react-router-dom';
import { PHONE_FILTERS } from '@common/filters';
import ClassNameProps from '@model/ClassNameProps';
import TheFilter from './TheFilter';

interface Props {}

const FilterContainer: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const criterias = useMemo(() => PHONE_FILTERS, []);
  const [filters, setFilters] = useState({});
  console.log('🚀 ----------------------------------------------------------');
  console.log('🚀 ~ file: FilterContainer.tsx ~ line 13 ~ filters', filters);
  console.log('🚀 ----------------------------------------------------------');

  const onFilterChange = (key: string, value: string) => {
    setFilters((pre) => ({ ...pre, [key]: value }));
  };

  const history = useHistory();
  const filter = () => {
    history.push(`${history.location.pathname}?${queryString.stringify(filters)}`);
  };

  return (
    <div className={`${props.className} mb-5`}>
      <h1 className="font-bold text-black text-xl mb-5">Bộ lọc</h1>
      <div>
        {criterias && (
          <ul className="flex flex-col gap-y-2">
            <TheFilter
              data={criterias.brands!}
              onFilterChange={(value) => onFilterChange('brands', value)}
              label="Thương hiệu"
              key="brand"
            ></TheFilter>

            <TheFilter data={criterias.os!} onFilterChange={(value) => onFilterChange('os', value)} label="Hệ điều hành" key="os"></TheFilter>
          </ul>
        )}
      </div>
      <button
        className="bg-primary px-3 py-2 mt-4 text-base text-white font-bold rounded-lg"
        type="button"
        onClick={() => filter()}
        aria-hidden="true"
      >
        Filter
      </button>
    </div>
  );
};

export default FilterContainer;
