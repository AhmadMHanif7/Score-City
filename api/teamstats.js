const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-football-beta.p.rapidapi.com/teams/statistics',
  params: {team: '33', season: '2022', league: '39'},
  headers: {
    'X-RapidAPI-Key': 'ee03341b2amsh862838b860df93fp1c2c67jsn507296649d6f',
    'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});