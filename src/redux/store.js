import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  if (action.type === 'CART_CLEAR') {
    return [];
  }
  return state;
}

const userInfo = (state = {}, action) => {
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
