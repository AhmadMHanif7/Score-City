const axios = require("axios");

var playerStats = []

const options = {
  method: 'GET',
  url: 'https://api-football-beta.p.rapidapi.com/players/topscorers',
  params: {season: '2021', league: '140'},
  headers: {
    'X-RapidAPI-Key': 'ee03341b2amsh862838b860df93fp1c2c67jsn507296649d6f',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  
  for (let i = 0; i < 10; i++){
    let position = {
      'name' : response.data.response[i].player.name,
      'photo' : response.data.response[i].player.photo,
      'team' : response.data.response[i].statistics[0].team.name,
      'goals' : response.data.response[i].statistics[0].goals.total,
      'assists' : response.data.response[i].statistics[0].goals.assists
    };
    playerStats.push(position)
  }

	console.log(playerStats);
}).catch(function (error) {
	console.error(error);
});