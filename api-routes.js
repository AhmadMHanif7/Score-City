const express = require('express');
const fixtures = require('./api/data/fixtures.json');
const leagueStandings = require('./api/data/leagueStandings.json');
const topScorer = require('./api/data/topScorer.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.get('/fixtures', (req,res) => {
    res.json(fixtures);
});

app.get('/leagueStandings', (req,res) => {
    res.json(leagueStandings);
});

app.get('/topScorer', (req,res) => {
    res.json(topScorer);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})