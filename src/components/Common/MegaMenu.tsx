import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Category from '../../model/Category';
import { getAllCategory } from '../../services/category.service';

interface Props {
  className: string;
}

type CategoryWithToggle = Category & { isShow: boolean };

const MegaMenu: React.FC<Props> = (props): JSX.Element => {
  const [categories, setCategories] = useState<CategoryWithToggle[]>([]);

  // Init category data
  const fetchCategory = useCallback(async () => {
    const categoriesDocs = await getAllCategory();
    setCategories(
      categoriesDocs.map((c) => {
        return {
          ...c,
          isShow: false,
        };
      })
    );
  }, []);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  // Toggle sub menu
  const findCategoryToToggle = useCallback(
    (id: string): number => {
      return categories.findIndex((c) => c.id === id)!;
    },
    [categories]
  );

  const closeSubmenu = useCallback(
    (id: string) => {
      const hoverCategory = findCategoryToToggle(id);
      const newCategory = [...categories];
      newCategory[hoverCategory].isShow = false;
      setCategories(newCategory);
    },
    [categories, findCategoryToToggle]
  );
  const openSubmenu = useCallback(
    (id: string) => {
      const hoverCategory = findCategoryToToggle(id);
      const newCategory = [...categories];
      newCategory[hoverCategory].isShow = true;
      setCategories(newCategory);
    },
    [categories, findCategoryToToggle]
  );

  // Pass data to /category/:slug
  const history = useHistory();
  const to = (category: Category, brand: string = '') => {
    if (brand !== '') {
      history.push(`/category/${category.path}?brand=${brand}`, { id: category.id });
    } else {
      history.push(`/category/${category.path}`, { id: category.id });
    }
  };

  return (
    <div className={`${props.className} absolute mega-menu`}>
      {/* Main Category */}
      <div className="main-menu">
        <ul>
          {categories.map((category) => (
            <div className="px-3" key={category.id} onMouseLeave={() => closeSubmenu(category.id)}>
              <li onMouseOver={() => openSubmenu(category.id)} onFocus={() => {}}>
                <div onClick={() => to(category)} aria-hidden="true">
                  {category.icon && <FontAwesomeIcon className="justify-self-center w-4 mr-2" icon={category.icon} size="lg" />}
                  <span>{category.label}</span>
                </div>
                {category.brands.length !== 0 && category.isShow && (
                  <ul className="sub-menu">
                    {category.brands.map((brand, index) => (
                      <li onClick={() => to(category, brand)} key={index} aria-hidden="true">
                        {brand}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
