// paytmConfig.js
const { v4: uuid } = require('uuid');
const dotenv = require('dotenv');

dotenv.config();

const paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
const paytmParams = {
  MID: process.env.PAYTM_MID,
  WEBSITE: process.env.PAYTM_WEBSITE,
  CHANNEL_ID: process.env.PAYTM_CHANNEL_ID,
  INDUSTRY_TYPE_ID: process.env.PAYTM_INDUSTRY_TYPE_ID,
  ORDER_ID: uuid(),
  CUST_ID: process.env.PAYTM_CUST_ID,
  TXN_AMOUNT: '100',
  CALLBACK_URL: 'http://localhost:7000/callback',
  EMAIL: 'yashsingh77@gmail.com',
  MOBILE_NO: '1234567890'
};

module.exports = { paytmMerchantKey, paytmParams };
