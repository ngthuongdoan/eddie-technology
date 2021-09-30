import Product from './Product';

export interface CustomerInformation {
  fullName: string;
  phone: string;
  address: string;
  email: string;
}
export type CartProduct = { amount: number } & Product;

export type Cart = { products: CartProduct[]; customer: CustomerInformation; total: number };
export type CartwithCode = { code: string } & Cart;
