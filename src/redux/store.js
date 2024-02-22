import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  return state;
}

const userInfo = (state = [], action) => {
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
