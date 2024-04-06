import mongoose from "mongoose";

export const Connection = async (URL) => {
  // const URL = `mongodb+srv://${username}:${password}@ecommerce-web.qbsr52x.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-web`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Databse connnected Successfully");
  } catch (error) {
    console.log("Error while connection with the database", error.message);
  }
};

export default Connection;
