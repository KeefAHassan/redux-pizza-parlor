import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  if (action.type === "ADD_PIZZA_TO_CART") {

    return [...state, action.payload];
  }
  else if (action.type === "REMOVE_FROM_CART") {
    return state.filter((item) => item.id !== action.payload)
  }
  if (action.type === 'CART_CLEAR') {
    return [];
  }
  return state;
}

const userInfo = (state = {}, action) => {

  if(action.type === 'USERINFO_ADD'){
    return action.payload;
  }
  if (action.type === 'USERINFO_CLEAR') {
    return {};
  }
  return state;
}

const store = createStore(
  combineReducers({
    cart,
    userInfo // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
