const express = require("express");
let blogRouter = express.Router();
const {
  blogIndex,
  blogPost,
  blogCreateGet,
  blogGetId,
  blogDeleteId,
} = require("../controllers/blogController");

//Root Route
blogRouter.get("/", blogIndex);
blogRouter.post("/", blogPost);

//Create New Blog
blogRouter.get("/create", blogCreateGet);

//Get or Delete Certain Blog
blogRouter.get("/:id", blogGetId);
blogRouter.delete("/:id", blogDeleteId);

module.exports = blogRouter;
