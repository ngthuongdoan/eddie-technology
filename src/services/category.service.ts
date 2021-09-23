import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import Category from '../model/Category';
import { db } from '../plugins/firebase';
import { productStore } from './product.service';

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

export const getAllCategoryBrands = async (id: string): Promise<string[]> => {
  const docRef = doc(db, 'category', id);
  const category = await getDoc(docRef);
  if (category.exists()) {
    return [...category.data().brands];
  }
  return [];
};

export const getAllCategoryColors = async (id: string): Promise<string[]> => {
  const q = query(productStore, where('category', '==', id));

  const querySnapshot = await getDocs(q);
  const colors: string[] = [];
  querySnapshot.forEach((product) => {
    colors.push(...product.data().colors);
  });

  return Array.from(new Set(colors));
};
