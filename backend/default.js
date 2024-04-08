const Product = require("./model/product-schema.js");

const DefaultData = async () => {
  try {
    // await Product.deleteMany({});        //required if no unique schema is set otherwise add multiple same data in database
    await Product.insertMany(products);

    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error while inserting default data", error.message);
  }
};

module.exports = DefaultData;
