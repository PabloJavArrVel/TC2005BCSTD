const token = "lip_tkzodQe0qC05o927MXex";
const puzzleId = "00sHx";

fetch(`https://lichess.org/api/puzzle/${puzzleId}`, {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then(response => response.json())
  .then(data => console.log(data.game.pgn));
