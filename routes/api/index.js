const router = require("express").Router();

const userRoutes = require("./user-routes");
const fixtureRoute = require("./fixture-route");
const leagueStandingRoute = require("./league-standing-route");
const topScorerRoute = require("./top-scorer-route");

router.use("/users", userRoutes);
router.use("/fixtures", fixtureRoute);
router.use("/leaguestandings", leagueStandingRoute);
router.use("/topscorer", topScorerRoute);

module.exports = router;
