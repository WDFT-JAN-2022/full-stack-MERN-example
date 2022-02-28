const router = require("express").Router();
const authRoutes = require("./auth.routes");
const itemRoutes = require("./item.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", authRoutes);
router.use("/item", itemRoutes);

module.exports = router;
