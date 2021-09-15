type Feature = {
  icon: string;
  title: string;
  path?: string;
};

const NAVIGATIONS: Array<Feature> = [
  {
    icon: 'tags',
    title: 'Khuyến mãi',
  },
  {
    icon: 'receipt',
    title: 'Đơn hàng',
  },
  {
    icon: 'user',
    title: 'Đăng nhập',
  },
  {
    icon: 'shopping-cart',
    title: 'Giỏ hàng',
  },
];

export default NAVIGATIONS;
