const router = require("express").Router();
const Item = require("../models/Item.model");

router.get("/", (req, res, next) => {
  res.json("Hitting Items");
});

router.post("/create", (req, res) => {
  Item.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  })
    .then((createdItem) => {
      res.json(createdItem);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/view-all", (req, res) => {
  Item.find()
    .then((foundItem) => {
      res.json(foundItem);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.get("/view/:itemId", (req, res) => {
  Item.findById(req.params.itemId)
    .then((foundItem) => {
      res.json(foundItem);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
