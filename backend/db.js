const mongoose = require("mongoose");
const URI =
  "mongodb+srv://satyajeethitk:S144oKzaEhLPdT02@cluster0.mlsvx83.mongodb.net/goFoodMern?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("db connected");
    const fetchCollectionForFoodData =
      mongoose.connection.db.collection("foodData");
    const fetchCollectionForFoodCategory =
      mongoose.connection.db.collection("foodCategory");
    // console.log("collection found");
    const foodData = await fetchCollectionForFoodData.find({}).toArray();
    const foodCategory = await fetchCollectionForFoodCategory
      .find({})
      .toArray();
    if (!foodData && !foodCategory) {
      console.log("error in fetching data from collection");
    } else {
      global.foodData = foodData;
      global.foodCategory = foodCategory;
    }
  } catch (error) {
    console.log("error from db", error);
  }
};
module.exports = connectDb;
