import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '@hooks/use-app-dispatch';
import Category from '@model/Category';
import ClassNameProps from '@model/ClassNameProps';
import { RootState } from '@model/ReduxType';
import { cachedActions, CategoryWithToggle } from '@store/modules/cached/reducer';

interface Props {}

const MegaMenu: React.FC<Props & ClassNameProps> = (props): JSX.Element => {
  const categories = useSelector<RootState>((state) => state.cached.category) as CategoryWithToggle[];
  const dispatch = useAppDispatch();
  const closeSubmenu = useCallback(
    (id: string) => {
      dispatch(cachedActions.setShowSubCategory({ id, isShow: false }));
    },
    [dispatch]
  );

  const openSubmenu = useCallback(
    (id: string) => {
      dispatch(cachedActions.setShowSubCategory({ id, isShow: true }));
    },
    [dispatch]
  );
  const history = useHistory();
  const to = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, category: Category, brand: string = '') => {
    e.preventDefault();
    if (brand !== '') {
      history.push(`/category/${category.id}?brands=${brand}`);
    } else {
      history.push(`/category/${category.id}`);
    }
  };

  history.listen(() => {
    dispatch(cachedActions.resetCategory());
  });

  return (
    <div className={`${props.className} absolute mega-menu`}>
      {/* Main Category */}
      <div className="main-menu">
        <ul>
          {categories &&
            categories.map((category) => (
              <div className="px-3" key={category.id} onMouseLeave={() => closeSubmenu(category.id)}>
                <li onMouseEnter={() => openSubmenu(category.id)} onFocus={() => {}}>
                  <a onClick={(e) => to(e, category)} aria-hidden="true">
                    {category.icon && <FontAwesomeIcon className="justify-self-center w-4 mr-2" icon={category.icon} size="lg" />}
                    <span>{category.label}</span>
                  </a>
                  {category.brands.length !== 0 && (
                    <ul className={`sub-menu ${!category.isShow && 'hidden'}`}>
                      {category.brands.map((brand, index) => (
                        <li key={index} aria-hidden="true">
                          <a onClick={(e) => to(e, category, brand)} aria-hidden="true">
                            {brand}
                          </a>
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
