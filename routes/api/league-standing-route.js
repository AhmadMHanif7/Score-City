const router = require("express").Router();
const leagueStanding = require("../../api/data/leagueStandings.json");

router.get("/", (req, res) => {
  res.json(leagueStanding);
});

module.exports = router;
