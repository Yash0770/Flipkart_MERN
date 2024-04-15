import axios from "axios";
import * as actionType from "../constants/cartConstant";

// const URL = "http://localhost:7000";
const URL = "https://yash-flipkart-clone-backend.vercel.app";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeFromCart = (id) => (dispatch) => {
  try {
    dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
  } catch (error) {
    dispatch({
      type: actionType.REMOVE_FROM_CART_FAILURE,
      payload: error.message,
    });
  }
};
