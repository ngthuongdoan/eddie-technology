import { IconProp } from '@fortawesome/fontawesome-svg-core';

class Feature {
  icon: IconProp;

  title: string;

  path?: string;

  constructor(iconName: IconProp, title: string, path = '') {
    this.icon = iconName;
    this.title = title;
    this.path = path;
  }
}

export default Feature;
