const mongoose = require("mongoose");
// refactoring step #4...the added at has a one time use only ,, however the timestamps will provide more in the long term when a book is reserved
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
 
},{timestamps:true});
//changing the exporting to make it easier with a variable step#5// checking controllers
const Book=mongoose.model("Book", bookSchema)
module.exports = Book
