import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Category {
  label: string;

  id: string;

  children?: string[];
  isParent?: boolean;
  icon?: IconProp;
  path?: string;
}

export default Category;
