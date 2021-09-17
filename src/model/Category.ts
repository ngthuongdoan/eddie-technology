interface Category {
  label: string;

  key: string | number;

  items?: Category[];
}

export default Category;
