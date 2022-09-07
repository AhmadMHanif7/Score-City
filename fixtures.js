const axios = require("axios");
var fixtureList = [];

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {league: '39', season: '2022', round: 'Regular Season - 5'},
  headers: {
    'X-RapidAPI-Key': 'ee03341b2amsh862838b860df93fp1c2c67jsn507296649d6f',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    
    for (let i = 0; i < response.data.response.length; i++) {
        let game = {
            'referee' : response.data.response[i].fixture.referee,
            'venue' : response.data.response[i].fixture.venue.name,
            'home team' : response.data.response[i].teams.home.name,
            'home logo' : response.data.response[i].teams.home.logo,
            'home goal' : response.data.response[i].goals.home,
            'away team' : response.data.response[i].teams.away.name,
            'away logo' : response.data.response[i].teams.away.logo,
            'away goal' : response.data.response[i].goals.away
        };
        fixtureList.push(game)
    }

	console.log(fixtureList);
}).catch(function (error) {
	console.error(error);
});