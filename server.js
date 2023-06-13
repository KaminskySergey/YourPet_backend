const app = require('./app')
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(4000, () => {
    console.log("Database connection successful")
  })

}).catch((err) => {
console.log(err)
process.exit(1)
})



