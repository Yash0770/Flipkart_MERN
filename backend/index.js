const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuid } = require("uuid");

const Connection = require("./databse/db.js");
const DefaultData = require("./default.js");
const Router = require("./routes/route.js");

const app = express();
const PORT = process.env.PORT || 7000;

dotenv.config();

app.use(cors());
// Configure CORS
// const corsOptions = {
//   origin: 'http://localhost:3000', // Frontend URL
//   methods: ['GET', 'POST'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true, // Allow credentials
// };
// app.use(cors(corsOptions));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.qbsr52x.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;

Connection(URL);
// Connection(URL)
//   .then(() => console.log('Database connected successfully'))
//   .catch(error => {
//     console.error('Database connection error:', error);
//     process.exit(1); // Exit the process if database connection fails
//   });

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});

DefaultData();

let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = '100';
paytmParams["CALLBACK_URL"] = 'http:localhost:7000/callback';
// paytmParams["CALLBACK_URL"] = 'callback';
paytmParams["EMAIL"] = 'yashsingh77@gmail.com';
paytmParams["MOBILE_NO"] = '1234567890';
