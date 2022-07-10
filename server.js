const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("index", {
    title: "Dashboard",
    styles: null,
    scripts: null,
  });
});

app.get("/teams", function (req, res) {
  res.render("teams", {
    title: "Teams",
    styles: ["dataTables.bootstrap4.css", "style.css"],
    scripts: [
      "jquery.dataTables.min.js",
      "dataTables.bootstrap4.min.js",
      "jquery.validate.min.js",
    ],
  });
});

app.get("/products", function (req, res) {
  res.render("products", {
    title: "Products",
    styles: ["dataTables.bootstrap4.css", "style.css"],
    scripts: [
      "jquery.dataTables.min.js",
      "dataTables.bootstrap4.min.js",
      "jquery.validate.min.js",
    ],
  });
});

app.get("/metadatas", function (req, res) {
  res.render("metadatas", {
    title: "Metadatas",
    styles: ["dataTables.bootstrap4.css"],
    scripts: [
      "jquery.dataTables.min.js",
      "dataTables.bootstrap4.min.js",
      "jquery.validate.min.js",
    ],
  });
});

app.get("/profile", function (req, res) {
  res.render("profile", {
    title: "Profile",
    styles: null,
    scripts: ["jquery.validate.min.js"],
  });
});

app.get("/settings", function (req, res) {
  res.render("settings", {
    title: "Settings",
    styles: null,
    scripts: ["jquery.validate.min.js", "bootstrap-show-password.js"],
  });
});

app.get("/login", function (req, res) {
  res.render("login", {
    title: "Login",
    styles: null,
    scripts: ["jquery.validate.min.js"],
  });
});

app.listen(8080);
console.log("Server is listening on port 8080");
