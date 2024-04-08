import axios from "axios";

// const URL = "http://localhost:7000";
const URL = "https://flipkart-backend-mern.vercel.app/";
// const URL = "";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    const response = await axios.post(`${URL}/payment`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling payment api", error);
  }
};
