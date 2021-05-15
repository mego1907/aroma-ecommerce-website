import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CURRENT_ITEM, ADD_JUST_ITEM_QTY } from './shoppingTypes'

import products from '../../products'

const initialState = {
  shopItems: products,
  cart: [],
  currentItem: null,
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Get Item Data from shopProducts Array
      const item = state.shopItems.find(
        (product) => product.id === action.payload
      );
      // Check if item in Cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case ADD_JUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shoppingReducer;
