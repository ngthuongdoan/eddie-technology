import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import Category from '../model/Category';
import { db } from '../plugins/firebase';
import { productStore } from './product.service';

export const categoryStore = collection(db, 'category');

export const getAllCategory = async (): Promise<Category[]> => {
  const querySnapshot = await getDocs(categoryStore);
  const categories: Category[] = [];
  querySnapshot.forEach((category) => {
    const data: Category = category.data() as Category;
    categories.push({
      id: category.id,
      label: data.label,
      brands: data.brands,
      icon: data.icon,
      path: data.path,
    });
  });
  return Promise.resolve(categories);
};

export const getAllCategoryBrands = async (id: string): Promise<string[]> => {
  const docRef = doc(db, 'category', id);
  const category = await getDoc(docRef);
  if (category.exists()) {
    return Promise.resolve([...category.data().brands]);
  }
  return Promise.resolve([]);
};

export const getAllCategoryColors = async (id: string): Promise<string[]> => {
  const q = query(productStore, where('category', '==', id));

  const querySnapshot = await getDocs(q);
  const colors: string[] = [];
  querySnapshot.forEach((product) => {
    colors.push(...product.data().colors);
  });

  return Promise.resolve(Array.from(new Set(colors)));
};
