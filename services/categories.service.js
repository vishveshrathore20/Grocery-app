const { category } = require("../models/category.model");
import { Limit } from "./../node_modules/mongoose/types/pipelinestage.d";

async function createCategory(params, callback) {
  if (!params.categoryName) {
    return callback(
      {
        message: "Category Name must be provided",
      },
      ""
    );
  }

  const model = new category(params);
  model
    .save()
    .then((response) => {
      callback(null, response);
    })
    .catch((error) => {
      callback(error, null);
    });
}

async function getCategories(params, callback) {
  const categoryName = params.categoryName;
  var condition = categoryName
    ? {
        categoryName: { $regex: new RegExp(categoryName, "i") },
      }
    : {};

  let perpage = Math.abs(params.pagesize) || 10;
  let page = (Math.abs(params.page) || 1) - 1;

  category
    .find(condition, "categoryName categoryImage")
    .limit(perpage)
    .skip(perpage * page)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      callback(error);
    });
}

async function getCategoriesById(params, callback) {
  const categoryId = params.categoryId;

  category
    .find(condition, "categoryName categoryImage")
    .then((response) => {
      if (!response) callback("Category not found");
      return callback(null, response);
    })
    .catch((error) => {
      callback(error);
    });
}

module.exports = { createCategory, getCategories };
