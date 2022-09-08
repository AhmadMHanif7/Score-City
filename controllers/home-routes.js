const router = require("express").Router();
const topScorerData = require("../api/data/topScorer.json");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/topscorer", (req, res) => {
  res.render("topscorer", { topScorerData });
});

module.exports = router;
