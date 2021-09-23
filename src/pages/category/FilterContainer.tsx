import React, { useState, useEffect, useCallback } from 'react';
import Tag from '../../components/UI/Tag';
import ClassNameProps from '../../model/ClassNameProps';
import { getAllCategoryBrands, getAllCategoryColors } from '../../services/category.service';
import TheFilter from './TheFilter';

interface Props {
  categoryId: string;
}

const FilterContainer: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const id = props.categoryId;
  const [criterias, setCriterias] = useState<{ brands: string[]; colors: string[] }>();

  const fetchData = useCallback(async () => {
    const brandDocs = await getAllCategoryBrands(id);
    const colorDocs = await getAllCategoryColors(id);
    setCriterias({
      brands: brandDocs,
      colors: colorDocs,
    });
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={`${props.className}`}>
      <h1 className="font-bold text-black text-xl mb-5">Bộ lọc</h1>
      <div>
        {criterias && (
          <ul className="flex flex-col gap-y-2">
            <TheFilter data={criterias.brands} label="Thương hiệu"></TheFilter>
            <TheFilter data={criterias.colors} label="Màu sắc"></TheFilter>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterContainer;
