import React, { useState, MouseEvent } from 'react';
import categories from '../../common/categories';
import Category from '../../model/Category';

interface Props {
  className: string;
}

const MegaMenu: React.FC<Props> = (props): JSX.Element => {
  const [subCategories, setSubCategories] = useState<Category[]>([]);

  const closeSubmenu = () => {
    setSubCategories([]);
  };

  const generateCategory = (key: number) => {
    closeSubmenu();
    const response = categories.find((c) => c.key === key) as Category;
    if (response!.items) {
      setSubCategories([...response.items]);
    }
  };

  return (
    <div className={`${props.className} absolute mega-menu`} onMouseLeave={closeSubmenu}>
      {/* Main Category */}
      <div className="main-menu">
        <ul>
          {categories.map((category) => (
            <li key={category.key} onMouseMove={() => generateCategory(+category.key)}>
              {category.label}
            </li>
          ))}
        </ul>
      </div>
      {/* Sub-category */}
      {subCategories.length !== 0 && (
        <ul className="sub-menu">
          {subCategories.map((category) => (
            <li key={category.key}>{category.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MegaMenu;
