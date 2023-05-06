const games = require('../models/chess.model');

let year = 2023;
let month = 4;
let username = 'TheThunderboltKing';


exports.get_index = (req, res, next) => {
    const lastURL = req.cookies.lastURL || '/';
    if (lastURL == '/') {
      games.getRapidGamesForMonth(username, year, month)
      .then((gamesRetrieved) => {
        res.render('chess', { games: gamesRetrieved });
      })
      .catch((err) => {
        console.error(err);
      });
    }
    else{
      console.log("lastURL redirected");
      console.log("Puedes visitar tu último juego acá:localhost:9000/",req.cookies.lastURL)
    }
};
exports.post_index = (req, res, next) => {
  username = req.body.username;
  year = req.body.year;
  month = req.body.month;
  games.getRapidGamesForMonth(username, year, month)
  .then((gamesRetrieved) => {
    res.render('chess', { games: gamesRetrieved });
  })
  .catch((err) => {
    console.error(err);
    res.render('error', { message: 'An error occurred while retrieving the games.' });
  });
};

exports.get_game = (req, res, next) => {
  res.setHeader('Set-Cookie', `lastURL=${req.originalUrl}; HttpOnly; Max-Age=86400; SameSite=Strict`);
  console.log("cookie set to:",req.cookies.lastURL)
  games.getRapidGamesForMonth(username, year, month)
  .then((gamesRetrieved) => {
    res.render('game', { game: gamesRetrieved[Number(req.params.id)] }); 
  })
  .catch((err) => {
    console.error(err);
  });
};
