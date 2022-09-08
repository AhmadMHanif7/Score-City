const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const topScorerRoute = require("./topScorer-route.js");
const leagueStandingsRoute = require('./leagueStandings-route.js');
const fixtureRoute = require('./fixture-route.js')

const { route } = require("./user-routes.js");

router.use("/users", userRoutes);
router.use("/fixtures", fixtureRoute);
router.use("/topScorer", topScorerRoute);
router.use("/leagueStandings", leagueStandingsRoute);

module.exports = router;
