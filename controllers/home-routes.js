const router = require("express").Router();
const topScorerData = require("../api/data/topScorer.json");
const leagueStandingsData = require("../api/data/leagueStandings.json");
const fixturesData = require("../api/data/fixtures.json");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/topscorer", (req, res) => {
  res.render("topscorer", { topScorerData });
});

router.get("/leaguestandings", (req, res) => {
  res.render("leaguestandings", { leagueStandingsData });
});

router.get("/fixtures", (req, res) => {
  res.render("fixtures", { fixturesData });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
