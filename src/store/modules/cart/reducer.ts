import Product, { CartProduct } from '@model/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SliceState = { products: CartProduct[] };

const initialCartState: SliceState = { products: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addProduct(state, actions: PayloadAction<Product>) {
      const newCart = [...state.products];
      const position = newCart.findIndex((product) => product.id === actions.payload.id);
      if (position !== -1) {
        newCart[position].amount += 1;
      } else {
        newCart.push({ ...actions.payload, amount: 1 });
      }
      state.products = [...newCart];
    },
    removeProduct(state, actions: PayloadAction<{ id: string }>) {
      const newCart = [...state.products];
      const position = newCart.findIndex((product) => product.id === actions.payload.id);
      newCart[position].amount -= 1;
      if (newCart[position].amount === 0) {
        newCart.splice(position, 1);
      }
      state.products = [...newCart];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
