const express = require("express");
const { userSignup, userLogin } = require("../controller/user-controller.js");
const { getProductById, getProducts } = require("../controller/product-controller.js");
const { addPaymentGateway, paytmResponse } = require("../controller/payment-controller.js");

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paytmResponse);

module.exports = router;
