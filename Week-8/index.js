// Import mongoose
const mongoose = require("mongoose");

// MongoDB connection URI
const MONGO_URI = "mongodb://localhost:27017/Week8";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.error("Error occurred during connection: " + err);
});

db.once("connected", () => {
  console.log(`Connected to ${MONGO_URI}`);
});

// Define Schema and Model
const PersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  Gender: String,
  Salary: Number,
});

const person_doc = mongoose.model(
  "modelname",
  PersonSchema,
  "personCollection"
);

person_doc
  .updateMany({ Gender: "Female" }, { Salary: 5555 })
  .exec()
  .then((docs) => {
    console.log("update");
    console.log(docs); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
