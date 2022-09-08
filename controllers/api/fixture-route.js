const router = require("express").Router();
const fixtures = require("../../api/data/fixtures.json");

router.get("/", (req, res) => {
  res.json(fixtures);
});

module.exports = router;
