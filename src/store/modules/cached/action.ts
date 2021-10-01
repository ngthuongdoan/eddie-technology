import { AppDispatch } from '../../../model/ReduxType';
import { getAllCategory } from '../../../services/category.service';
import { getAllProducts } from '../../../services/product.service';
import { cachedActions } from './reducer';

export const asyncData = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const [categories, promoteProducts] = await Promise.all([getAllCategory(), getAllProducts()]);

      dispatch(cachedActions.setCategory({ category: categories }));
      dispatch(cachedActions.setPromoteProduct({ products: promoteProducts }));
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
