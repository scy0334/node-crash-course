const Blog = require("../models/blog");

const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // display newest to oldes
    .then((blogs) => {
      res.render("blogs/index", { title: "All Blogs", blogs });
    });
};

const blogPost = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blogCreateGet = (req, res) => {
  res.render("blogs/create", { title: "Create a new blog" });
};

const blogGetId = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.render("blogs/details", { blog, title: "Blog Detail" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog not found" });
    });
};

const blogDeleteId = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blogIndex,
  blogPost,
  blogCreateGet,
  blogGetId,
  blogDeleteId,
};
