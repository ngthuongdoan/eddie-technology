import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Category {
  label: string;

  id: string;

  brands: string[];
  icon: IconProp;
  path: string;
}

export default Category;
