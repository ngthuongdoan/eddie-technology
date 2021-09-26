import { AppDispatch } from '../../model/ReduxType';
import { getAllCategory } from '../../services/category.service';
import { getAllProducts } from '../../services/product.service';
import { cachedActions, CategoryWithToggle } from '../modules/cachedData';

export const asyncData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const categories = await getAllCategory();
      const promoteProducts = await getAllProducts();
      const categoriesWithToggle: CategoryWithToggle[] = categories.map((c) => {
        return {
          ...c,
          isShow: false,
        };
      });
      dispatch(cachedActions.setCategory({ category: categoriesWithToggle }));
      dispatch(cachedActions.setPromoteProduct({ products: promoteProducts }));
    } catch (e) {
      throw new Error('Server Error');
    }
  };
};
