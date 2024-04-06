import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

import Connection from "./databse/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();
// const PORT = process.env.PORT || 7000;
const PORT = 7000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.qbsr52x.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;

Connection(URL);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});

DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = '100';
// paytmParams["CALLBACK_URL"] = 'http://localhost:7000/callback';
paytmParams["CALLBACK_URL"] = 'callback';
paytmParams["EMAIL"] = 'yashsingh77@gmail.com';
paytmParams["MOBILE_NO"] = '1234567890';
