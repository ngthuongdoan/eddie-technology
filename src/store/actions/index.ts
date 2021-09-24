import { AppDispatch } from '../../model/ReduxType';
import { getAllCategory } from '../../services/category.service';
import { getAllProducts } from '../../services/product.service';
import { cacheActions } from '../modules/cachedData';

export const asyncData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const categories = await getAllCategory();
      const promoteProducts = await getAllProducts();
      const categoriesWithToggle = categories.map((c) => {
        return {
          ...c,
          isShow: false,
        };
      });
      dispatch(cacheActions.setCategory({ category: categoriesWithToggle }));
      dispatch(cacheActions.setPromoteProduct({ products: promoteProducts }));
    } catch (e) {
      throw new Error('Server Error');
    }
  };
};
