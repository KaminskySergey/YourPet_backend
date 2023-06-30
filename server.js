const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connection successful"))
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running on port: 4000");
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
