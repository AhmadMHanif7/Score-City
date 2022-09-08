const router = require("express").Router();
const topScorer = require("../../api/data/topScorer.json");

router.get("/", (req, res) => {
  res.json(topScorer);
});

module.exports = router;
