const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'chessGames',
  port: 8889,
  password: 'lol23',
}); 

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexión a la base: ' + err.stack);
    return;
  }
  console.log('Conectado a la base.');
});

module.exports = pool;