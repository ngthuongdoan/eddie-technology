import { AppDispatch } from '../../../model/ReduxType';
import { getAllCategory } from '../../../services/category.service';
import { getAllProducts } from '../../../services/product.service';
import { cachedActions, CategoryWithToggle } from './reducer';

export const asyncData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const [categories, promoteProducts] = await Promise.all([getAllCategory(), getAllProducts()]);
      const categoriesWithToggle: CategoryWithToggle[] = categories.map((c) => {
        return {
          ...c,
          isShow: false,
        };
      });
      dispatch(cachedActions.setCategory({ category: categoriesWithToggle }));
      dispatch(cachedActions.setPromoteProduct({ products: promoteProducts }));
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
