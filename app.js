const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blogRoutes");

//express app
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://netninja:test1234@cluster0.3r0t2.mongodb.net/note-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) //asynchronous function
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.use("/blogs", blogRouter);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
