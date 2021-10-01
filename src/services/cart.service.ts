import { CartwithCode } from '@model/Cart';
import { collection, addDoc, where, query, getDocs, limit, QuerySnapshot } from 'firebase/firestore';
import { db } from '../plugins/firebase';

export const cartStore = collection(db, 'cart');

export const addNewCheckout = async (cart: CartwithCode) => {
  const data: CartwithCode = { ...cart };
  await addDoc(cartStore, data);
};

export const getCart = async (code: string): Promise<CartwithCode> => {
  const q = query(cartStore, where('code', '==', code.toLowerCase()), limit(1));
  const querySnapshot = await getDocs(q);

  let result: CartwithCode = {
    code: '',
    customer: {
      address: '',
      email: '',
      fullName: '',
      phone: '',
    },
    products: [],
    total: 0,
  };
  if (querySnapshot.size === 0) return Promise.reject();
  querySnapshot.forEach((cart) => {
    const data = cart.data() as CartwithCode;
    result = {
      code: data.code,
      customer: data.customer,
      products: data.products,
      total: data.total,
    };
  });
  return Promise.resolve(result);
};
