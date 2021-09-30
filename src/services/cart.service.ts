import { Cart, CartwithCode } from '@model/Cart';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../plugins/firebase';

export const cartStore = collection(db, 'cart');

export const addNewCheckout = async (cart: Cart) => {
  const data: CartwithCode = { ...cart, code: (Math.random() + 1).toString(36).substring(7) };
  await addDoc(cartStore, data);
};
