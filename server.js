// Express boilerplate
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "hbs");

// Application concerns
const burgersRouter = require("./routers/burgers");

// Mount burgrersRouter router middleware
app.use("/api", burgersRouter);

// Static middleware
app.use(express.static("./public"));
// app.get("/assets/images/burghers.jpg", (req, res) => {
//   res.sendFile(__dirname + "/public/assets/images/burghers.jpg");
// });

// const db = require("./models");
// const Burger = db.Burger
const { Burger } = require("./models");

// Render hbs template
app.get("/", (req, res) => {
  Burger.findAll().then(burgers => {
    res.render("index", { burgers });
  });
});

app.listen(process.env.PORT || 3000);
