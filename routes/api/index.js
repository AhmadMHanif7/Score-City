const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const dashboardRoutes = require("./dashboard-routes.js");

router.use("/users", userRoutes);

module.exports = router;
