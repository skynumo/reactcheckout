import { ADD_QUANTITY, ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, SET_CART_DATA, SUB_QUANTITY } from "../_actionTypes";

const initialState = {
  products: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_DATA:
      return {
        ...state,
        products: action.data,
      };
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id ? { ...product, selected: true } : product,
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id
            ? { ...product, selected: false, quantity: 1 }
            : product,
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id
            ? {
              ...product,
              quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
            }
            : product,
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        products: state.products.map(product =>
          product.selected
            ? { ...product, selected: false, quantity: 1 }
            : product,
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;