const router = require("express").Router();

const userRoutes = require("./user-routes.js");
<<<<<<< HEAD
const dashboardRoutes = require("./dashboard-routes.js");
=======
const topScorerRoute = require("./topScorer-route.js");
const leagueStandingsRoute = require('./leagueStandings-route.js');
const fixtureRoute = require('./fixture-route.js')

const { route } = require("./user-routes.js");
>>>>>>> 195cf26a2a13f479d9f25ea1b0d266d1564143a1

router.use("/users", userRoutes);
router.use("/fixtures", fixtureRoute);
router.use("/topScorer", topScorerRoute);
router.use("/leagueStandings", leagueStandingsRoute);

module.exports = router;
