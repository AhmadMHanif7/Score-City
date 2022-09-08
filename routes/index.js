const router = require("express").Router();

const apiRoutes = require("./api");
const dashBoardRoute = require('./dashboard-routes')

router.use("/api", apiRoutes);
router.use("/dashBoard", dashBoardRoute);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
