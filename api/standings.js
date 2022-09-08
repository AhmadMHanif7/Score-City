const axios = require("axios");
const fs = require("fs");

var leagueStandings = [];

const options = {
  method: 'GET',
  url: 'https://api-football-beta.p.rapidapi.com/standings',
  params: {season: '2022', league: '39'},
  headers: {
    'X-RapidAPI-Key': 'ee03341b2amsh862838b860df93fp1c2c67jsn507296649d6f',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {

  for (let i = 0; i < response.data.response[0].league.standings[0].length; i++) {
    let positions = {
      'rank': response.data.response[0].league.standings[0][i].rank,
      'name': response.data.response[0].league.standings[0][i].team.name,
      'logo': response.data.response[0].league.standings[0][i].team.logo,
      'games played' : response.data.response[0].league.standings[0][i].all.played,
      'wins' : response.data.response[0].league.standings[0][i].all.win,
      'draws': response.data.response[0].league.standings[0][i].all.draw,
      'loses': response.data.response[0].league.standings[0][i].all.lose,
      'points': response.data.response[0].league.standings[0][i].points,
      'goals for': response.data.response[0].league.standings[0][i].all.goals.for,
      'goals against': response.data.response[0].league.standings[0][i].all.goals.against,
      'goal differential': response.data.response[0].league.standings[0][i].goalsDiff,
      'recent form' : response.data.response[0].league.standings[0][i].form
    }

    leagueStandings.push(positions)
  }
  
	let data = JSON.stringify(leagueStandings, null, 2);
  fs.writeFileSync('api/data/leagueStandings.json', data);
}).catch(function (error) {
	console.error(error);
});