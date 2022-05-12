import BigBoard from "./BigBoard";
import CharacterSelect from "./CharacterSelect";
import {useState} from "react";

function Game() {


const [promptText, setPrompt] = useState(null);
const [players, setPlayers] = useState([null, null]);
const [currentPlayer, setCurrentPlayer] = useState(null);
const [winner, setWinner] = useState(null);

function selectCharacter(ch) {
  if(players[0] == null){
    setPlayers([ch, null]);
    setCurrentPlayer(ch);
  }
  else {
    setPlayers([players[0], ch]);
    (currentPlayer === null) && setCurrentPlayer(ch);
    setPrompt(null);
  }
}

function switchPlayer(gameOver) {
  if(gameOver){
    console.log("Game Winner Is " + gameOver);
    setWinner(gameOver);
  }
  else{
    if(currentPlayer === players[0])
      setCurrentPlayer(players[1]);
    else
      setCurrentPlayer(players[0]);
  }
  //console.log(currentPlayer);
}

function startGamePrompt(){
  if(players[0] == null)
    setPrompt("Please select Player 1 character to continue");
  else if(players[1] == null)
    setPrompt("Please Select Player 2 character to continue");  
}

  return (
    <>
      {(currentPlayer !== null) && <p className="text-gameTextColor text-justify">Current Player: {currentPlayer}</p>}
      {(players[0] === null || players[1] === null) && 
      <div>
        <p className="text-gameTextColor">Please select character: </p>
        <CharacterSelect selectCharacter={selectCharacter}/>
      </div>
      }
      <div className="game">
        <BigBoard currentPlayer={currentPlayer} next={switchPlayer} startGame={startGamePrompt}/>
        <p className="gameOverText">{winner && `The winner of the game is ${winner}`}</p>
        <p className="text-gameTextColor text-justify">{promptText && promptText}</p>
      </div>
    </>
  );

}

export default Game;