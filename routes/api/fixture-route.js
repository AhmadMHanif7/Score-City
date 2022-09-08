const router = require("express").Router();
const fixtures = require('../../api/data/fixtures.json');

router.get("/fixtures", (req, res) => {
    res.json(fixtures);
});