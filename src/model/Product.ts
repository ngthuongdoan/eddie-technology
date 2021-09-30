import Specifications from './Specifications';

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  images: string[];
  listedPrice: number;
  promotionPrice: number;
  promotionPercent: number;
  colors: string[];
  description: string;
  specifications: Specifications[];
}

export default Product;

export interface ProductProps {
  product: Product;
}
