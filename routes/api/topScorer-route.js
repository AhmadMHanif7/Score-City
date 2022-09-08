const router = require("express").Router();
const topScorer = require('../../api/data/topScorer.json');

router.get("/topScorer", (req, res) => {
    res.json(topScorer);
});