import { Cart, CustomerInformation } from '@model/Cart';
import Product from '@model/Product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductPrice } from '@utils/index';

const initialCartState: Cart = {
  products: [],
  customer: {
    fullName: '',
    phone: '',
    address: '',
    email: '',
  },
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    hydrate: (state, action) => {
      if (action.payload) {
        return action.payload;
      }
      return initialCartState;
    },
    addProduct(state, { payload }: PayloadAction<Product>) {
      const newCart = [...state.products];
      const position = newCart.findIndex((product) => product.id === payload.id);
      if (position !== -1) {
        newCart[position].amount += 1;
      } else {
        newCart.push({ ...payload, amount: 1 });
      }
      state.products = [...newCart];
      // Update total
      state.total += getProductPrice(payload);

      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeProduct(state, { payload }: PayloadAction<Product>) {
      const newCart = [...state.products];
      const position = newCart.findIndex((product) => product.id === payload.id);
      newCart[position].amount -= 1;
      if (newCart[position].amount === 0) {
        newCart.splice(position, 1);
      }
      state.products = [...newCart];
      // Update total
      state.total -= getProductPrice(payload);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    setCustomerInformation(state, { payload }: PayloadAction<CustomerInformation>) {
      state.customer = { ...payload };
    },
    resetCart(state) {
      return initialCartState;
    },
  },
  extraReducers: {},
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
