const mongooose = require("mongoose");

const category = mongooose.model(
  "Category",
  mongoose.Schema({
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
    categoryDescription: {
      type: String,
      required: false,
    },
    categoryImage: {
      type: String,
      required: false,
    },
  })
);

module.exports = category;
