const router = require("express").Router();
const leagueStandings = require('../../api/data/leagueStandings.json');

router.get("/leagueStandings", (req, res) => {
    res.json(leagueStandings);
});