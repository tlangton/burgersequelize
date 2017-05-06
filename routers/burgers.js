const router = require("express").Router();
const { Burger } = require("../models");

router.post("/burgers", (req, res) => {
  const name = req.body.name;
  Burger.create({ name }).then(() => {
    res.redirect("/");
  });
});

router.post("/burgers/:id/eat", (req, res) => {
  const id = req.params.id;
  Burger.findById(id).then(burger => {
    burger.devoured = true;
    burger.save().then(() => {
      res.redirect("/");
    });
  });
});

module.exports = router;
