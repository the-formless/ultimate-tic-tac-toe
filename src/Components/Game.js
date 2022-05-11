import BigBoard from "./BigBoard";
import {useState} from "react";

function Game() {

let players = ["X", "O"];
const [currentPlayer, setPlayer] = useState(players[0]);
const [winner, setWinner] = useState(null);

function switchPlayer(gameOver) {
  if(gameOver){
    console.log("Game Winner Is " + gameOver);
    setWinner(gameOver);
  }
  else{
    if(currentPlayer === players[0])
      setPlayer(players[1]);
    else
      setPlayer(players[0]);
  }
  //console.log(currentPlayer);
}

  return (
    <div className="game">
      <BigBoard currentPlayer={currentPlayer} next={switchPlayer}/>
      <p className="gameOverText">{winner && `The winner of the game is ${winner}`}</p>
    </div>
  );
}

export default Game;