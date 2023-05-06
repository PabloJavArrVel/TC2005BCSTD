const games =  [
    {
      id: 1,
      white: 'John Doe',
      black: 'Jane Doe',
      ratingWhite: 1000,
      ratingBlack: 1000,
      moves: 'e4 e5'
    },
    {
      id: 2,
      white: 'John Doe',
      black: 'Jane Doe',
      ratingWhite: 1000,
      ratingBlack: 1000,
      moves: 'e4 e5'
    },
    {
      id: 3,
      white: 'John Doe',
      black: 'Jane Doe',
      ratingWhite: 1000,
      ratingBlack: 1000,
      moves: 'e4 e5'
    }
  ];



exports.get_game = (req, res, next) => {
    console.log("cookie set to:",req.cookies.lastURL)
    res.render('game', { game: games.at(Number(req.params.id)-1) });  
  }

  exports.get_index = (req, res, next) => {
    const lastURL = req.cookies.lastURL || '/';
    if (lastURL == '/') {
      res.render('chess', { games: games });
    }
    else{
      console.log("lastURL redirected");
      console.log("Puedes visitar tu último juego acá:localhost:9000/",req.cookies.lastURL)
    }
  };