const mongoose = require("mongoose");

const Connection = async (URL) => {
  // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.qbsr52x.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

module.exports = Connection;
