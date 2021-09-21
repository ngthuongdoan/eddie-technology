import { collection, getDocs, doc, query, where, getDoc } from 'firebase/firestore';
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
    listedPrice: product.data()!.listedPrice,
    promotionPrice: product.data()?.promotionPrice,
    promotionPercent: product.data()?.promotionPercent,
    colors: product.data()!.colors,
    description: product.data()!.description,
    specifications: product.data()!.specifications,
  };
};
