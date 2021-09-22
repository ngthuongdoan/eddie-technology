import { collection, getDocs, doc, query, where, getDoc } from 'firebase/firestore';
import Filter from '../model/Filter';
import Product from '../model/Product';
import { db } from '../plugins/firebase';

export const productStore = collection(db, 'product');

export const getAllProducts = async (): Promise<Product[]> => {
  const querySnapshot = await getDocs(productStore);
  const products: Product[] = [];
  querySnapshot.forEach((product) => {
    products.push({
      id: product.id,
      name: product.data().name,
      images: product.data().images,
      category: product.data().category,
      listedPrice: product.data().listedPrice,
      promotionPrice: product.data().promotionPrice,
      promotionPercent: product.data().promotionPercent,
      colors: product.data().colors,
      description: product.data().description,
      specifications: product.data().specifications,
      brand: product.data().brand,
    });
  });
  return products;
};

export const getAllProductsWithCategory = async (categoryId: string, filter: Filter): Promise<Product[]> => {
  const q = query(productStore, where('category', '==', categoryId), where('brand', '==', filter.brand));

  const querySnapshot = await getDocs(q);
  const products: Product[] = [];
  querySnapshot.forEach((product) => {
    products.push({
      id: product.id,
      name: product.data().name,
      images: product.data().images,
      category: product.data().category,
      listedPrice: product.data().listedPrice,
      promotionPrice: product.data().promotionPrice,
      promotionPercent: product.data().promotionPercent,
      colors: product.data().colors,
      description: product.data().description,
      specifications: product.data().specifications,
      brand: product.data().brand,
    });
  });
  return products;
};

export const getProduct = async (id: string): Promise<Product> => {
  const docRef = doc(db, 'product', id);
  const product = await getDoc(docRef);

  return {
    id: product.id,
    name: product.data()!.name,
    brand: product.data()!.brand,
    images: product.data()!.images,
    category: product.data()!.category,
    listedPrice: product.data()!.listedPrice,
    promotionPrice: product.data()?.promotionPrice,
    promotionPercent: product.data()?.promotionPercent,
    colors: product.data()!.colors,
    description: product.data()!.description,
    specifications: product.data()!.specifications,
  };
};
