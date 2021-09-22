import { collection, getDocs } from 'firebase/firestore';
import Category from '../model/Category';
import { db } from '../plugins/firebase';

export const categoryStore = collection(db, 'category');

export const getAllCategory = async (): Promise<Category[]> => {
  const querySnapshot = await getDocs(categoryStore);
  const categories: Category[] = [];
  querySnapshot.forEach((category) => {
    // doc.data() is never undefined for query doc snapshots
    categories.push({
      id: category.id,
      label: category.data().label,
      brands: category.data().brands,
      icon: category.data().icon,
      path: category.data().path,
    });
  });
  return categories;
};
