// const connection = require('../util/database');
var ChessWebAPI = require('chess-web-api');
var chessAPI = new ChessWebAPI();


// const queryPromise = new Promise((resolve, reject) => {
//   connection.query('SELECT * FROM games', (error, results, fields) => {
//     if (error) {
//       console.error('Error buscando games: ' + error.stack);
//       reject(error);
//       return;
//     }

//     results.forEach(game => {
//       const gameData = {
//         id: game.id,
//         white: game.white,
//         black: game.black,
//         ratingWhite: game.ratingWhite,
//         ratingBlack: game.ratingBlack,
//         moves: game.moves
//       };

//       games.push(gameData);
//     });

//     resolve();
//   });
// });

// queryPromise.then(() => {
//   console.log('Query finalizada.');
//   connection.end();
// }).catch(error => {
//   console.error('Error en la query:', error);
// });


exports.getRapidGamesForMonth = (username, year, month) => {
  return chessAPI.getPlayerCompleteMonthlyArchives(username, year, month).then(function(response) {
    var i = 0;
    var perspective = '';
    var rapidGames = [];
    var games = response.body.games;

    for(var key in games) {
      if(games[key].time_class == 'rapid'){
        const regex = /\{[^{}]+\}/g;
        if (games[key].white.username.toLowerCase() === username.toLowerCase()) {
          perspective = 'white';
        }
        else if (games[key].black.username.toLowerCase() === username.toLowerCase()) {
          perspective = 'black';
        }    
        rapidGames.push({
          id: i,
          white: games[key].white.username,
          black: games[key].black.username,
          ratingWhite: games[key].white.rating,
          ratingBlack: games[key].black.rating,
          perspectiveBoard: perspective,
          moves: games[key].pgn.replace(regex, '').replace(/(\d+\.\s)/g, '$1').replace(/\s+\d+\.\.\./g, " ").split("\n").filter(line => !line.startsWith('[')).join('\n').replace(/\n/g, '')
        })
        i++;
      }
    }
    return rapidGames.reverse();
  });
}



