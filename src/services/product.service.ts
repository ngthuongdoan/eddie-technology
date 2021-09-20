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
    });
  });
  return products;
};

// export const getProductByType = async (isParent: boolean): Promise<Product[]> => {
//   const q = query(productStore, where('isParent', '==', isParent));

//   const querySnapshot = await getDocs(q);
//   const products: Product[] = [];
//   querySnapshot.forEach((product) => {
//     // doc.data() is never undefined for query doc snapshots
//     products.push({
//       id: product.id,
//       label: product.data().label,
//       children: product.data().children,
//       isParent: product.data().isParent,
//       icon: product.data().icon,
//     });
//   });
//   return products;
// };
