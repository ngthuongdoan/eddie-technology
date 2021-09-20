import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useCallback } from 'react';
import Category from '../../model/Category';
import { getAllCategory } from '../../services/category.service';

interface Props {
  className: string;
}

const MegaMenu: React.FC<Props> = (props): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [parentCategories, setParentCategories] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<Category[]>([]);

  const fetchCategory = useCallback(async () => {
    const categoriesDocs = await getAllCategory();
    setCategories([...categoriesDocs]);
    setParentCategories([...categoriesDocs.filter((c) => c.isParent)]);
  }, []);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  const closeSubmenu = useCallback(() => {
    setSubCategories([]);
  }, []);

  const generateCategory = (id: string) => {
    // Clear sub-menu
    closeSubmenu();
    //  Find children
    const response = parentCategories.find((c) => c.id === id) as Category;
    const { children } = response!;
    if (children) {
      // Generate
      const sub: Category[] = [];
      children.every((child) => {
        const existCategory = categories.find((element) => element.id === child);
        if (existCategory) {
          const category: Category = {
            id: existCategory!.id,
            label: existCategory!.label,
          };
          sub.push(category);
          return true;
        }
        return false;
      });
      setSubCategories([...sub]);
    }
  };

  return (
    <div className={`${props.className} absolute mega-menu`} onMouseLeave={closeSubmenu}>
      {/* Main Category */}
      <div className="main-menu">
        <ul>
          {parentCategories.map((category) => (
            <li key={category.id} onMouseMove={() => generateCategory(`${category.id}`)}>
              {category.icon && (
                <FontAwesomeIcon
                  className="justify-self-center w-4 mr-2"
                  icon={category.icon}
                  size="lg"
                />
              )}
              <span>{category.label}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Sub-category */}
      {subCategories.length !== 0 && (
        <ul className="sub-menu">
          {subCategories.map((category) => (
            <li key={category.id}>{category.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MegaMenu;
