require("dotenv").config();
const mongoose = require("mongoose");
const Person = require("./models/schema");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error.stack);
    process.exit(1);
  }
};

const getPersons = async () => {
  const persons = await Person.find({});
  return persons;
};

module.exports = { connectDB, getPersons };
