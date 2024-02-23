import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  if (action.type === "ADD_PIZZA_TO_CART") {
//add a new pizza to the cart.
    return [...state, action.payload];
  }
  else if (action.type === "REMOVE_FROM_CART") {
    //remove a pizza from the cart by searching for it useing the filter.
    return state.filter((item) => item.id !== action.payload)
  }
  if (action.type === 'CART_CLEAR') {
    return [];
  }
  return state;
}
//use to store user info.
const userInfo = (state = {}, action) => {

  if(action.type === 'USERINFO_ADD'){
    return action.payload;
  }
  if (action.type === 'USERINFO_CLEAR') {
    return {};
  }
  return state;
}
//creating the global store.
const store = createStore(
  combineReducers({
    cart,
    userInfo // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
