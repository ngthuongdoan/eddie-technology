import { collection, getDocs, doc, query, where, getDoc, QueryConstraint } from 'firebase/firestore';
import { Filters } from '../model/Filter';
import Product from '../model/Product';
import { db } from '../plugins/firebase';
import { removeNullAndUndefined } from '../utils';

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
  return Promise.resolve(products);
};

const generateQuery = (filter: Record<string, string>) => {
  const refinedFilter = removeNullAndUndefined(filter);
  const result: QueryConstraint[] = [];
  for (const key in refinedFilter) {
    if (Object.prototype.hasOwnProperty.call(refinedFilter, key)) {
      if (refinedFilter[key].length !== 0) {
        result.push(where(key, '==', refinedFilter[key]));
      }
    }
  }
  return result;
};

export const getAllProductsWithCategory = async (categoryId: string, filter: Filters): Promise<Product[]> => {
  const refinedFilter = generateQuery(filter as Record<string, string>);
  const q = query(productStore, where('category', '==', categoryId), ...refinedFilter);

  const querySnapshot = await getDocs(q);
  const products: Product[] = [];
  querySnapshot.forEach((product) => {
    const data: Product = product.data() as Product;
    products.push({
      id: product.id,
      name: data.name,
      images: data.images,
      category: data.category,
      listedPrice: data.listedPrice,
      promotionPrice: data.promotionPrice,
      promotionPercent: data.promotionPercent,
      colors: data.colors,
      description: data.description,
      specifications: data.specifications,
      brand: data.brand,
    });
  });
  return Promise.resolve(products);
};

export const getProduct = async (id: string): Promise<Product> => {
  const docRef = doc(db, 'product', id);
  const product = await getDoc(docRef);
  const data: Product = product.data() as Product;

  return Promise.resolve({
    id: product.id,
    name: data.name,
    brand: data.brand,
    images: data.images,
    category: data.category,
    listedPrice: data.listedPrice,
    promotionPrice: data?.promotionPrice,
    promotionPercent: data?.promotionPercent,
    colors: data.colors,
    description: data.description,
    specifications: data.specifications,
  });
};
