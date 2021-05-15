import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CURRENT_ITEM, ADD_JUST_ITEM_QTY} from './shoppingTypes';

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: id
  };
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item
  }
}

export const addJustItemQty = (id, qty) => {
  return {
    type: ADD_JUST_ITEM_QTY,
    payload: { id, qty }
  }
}