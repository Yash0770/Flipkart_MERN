import { createStore, combineReducers, applyMiddleware } from "redux";
import { getProductDetailsReducer, getProductsReducer } from "./reducers/productReducer";
import { thunk } from "redux-thunk";
// import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
// const store = createStore(reducer, applyMiddleware(...middleware));  // use this if not added devTools extentions


export default store;
