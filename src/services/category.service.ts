import { collection, getDocs, doc, query, where, getDoc } from 'firebase/firestore';
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
      children: category.data().children,
      isParent: category.data().isParent,
      icon: category.data().icon,
    });
  });
  return categories;
};

export const getCategoryByType = async (isParent: boolean): Promise<Category[]> => {
  const q = query(categoryStore, where('isParent', '==', isParent));

  const querySnapshot = await getDocs(q);
  const categories: Category[] = [];
  querySnapshot.forEach((category) => {
    // doc.data() is never undefined for query doc snapshots
    categories.push({
      id: category.id,
      label: category.data().label,
      children: category.data().children,
      isParent: category.data().isParent,
      icon: category.data().icon,
    });
  });
  return categories;
};
