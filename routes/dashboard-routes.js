const rounter = require("express").Router();
const sequelize = require("../config/connection");
const fixtures = require("../../api/data/fixtures.json");
const leagueStandings = require("../../api/data/leagueStandings.json");
const topScorer = require("../../api/data/topScorer.json");
const withAuth = require("../utils/auth");

router
  .get("/fixtures", (req, res) => {
    res.json(fixtures);
  })
  .then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: true });
  });

router.get("/leagueStandings", (req, res) => {
  res.json(leagueStandings);
});

router.get("/topScorer", (req, res) => {
  res.json(topScorer);
});
