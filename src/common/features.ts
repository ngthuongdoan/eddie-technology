import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Feature = {
  icon: IconProp;
  title: string;
  path?: string;
};

const FEATURES: Array<Feature> = [
  {
    icon: 'map-marked-alt',
    title: 'Hệ thống cửa hàng',
  },
  {
    icon: 'headset',
    title: 'Tư vấn mua hàng',
  },
  {
    icon: 'headset',
    title: 'Chăm sóc khách hàng',
  },
  {
    icon: 'newspaper',
    title: 'Tin tức công nghệ',
  },
  {
    icon: 'laptop',
    title: 'Xây dựng cấu hình',
  },
];

export default FEATURES;
