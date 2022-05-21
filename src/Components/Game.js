import BigBoard from "./BigBoard";
import CharacterSelect from "./CharacterSelect";
import {useState} from "react";
import ReplayIcon from '@mui/icons-material/Replay';

function Game() {

//window.addEventListener("beforeunload", reloadGame);

const [promptText, setPrompt] = useState(null);
const [players, setPlayers] = useState([null, null]);
const [currentPlayer, setCurrentPlayer] = useState(null);
const [winner, setWinner] = useState(null);

const reloadGame = async () => {
  let reloadGameBool = await window.confirm("Do you want to restart?");
  if(reloadGameBool){
    window.onbeforeunload = null;
    window.location.reload(false);
  }
  else{
    window.onbeforeunload = reloadGame;
  }
}
window.onbeforeunload = reloadGame;

function selectCharacter(ch) {
  //if initial selection, store first choice in 0, second in 1
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
}

//if player clicks on board without selecting characters
function startGamePrompt(){
  if(players[0] == null)
    setPrompt("Please select Player 1 character to continue");
  else if(players[1] == null)
    setPrompt("Please Select Player 2 character to continue");  
}

  return (
    <>
      
        {(currentPlayer !== null) && 
        <div className="flex">
          <p className="text-gameTextColor mt-2 mx-auto text-justify">Current Player: {currentPlayer}</p>
          <button className="justify-self-end px-2 py-1 mx-auto border-2 border-gameTextColor " onClick={() => reloadGame()}><ReplayIcon /></button>
        </div>
        }
      {(players[0] === null || players[1] === null) && 
      <div>
        <p className="text-gameTextColor">{players[0] === null ? "Please select Player 1 character:" : "Please select Player 2 character: " }</p>
        <CharacterSelect selectCharacter={selectCharacter}/>
      </div>
      }
      <div className="game">
        <BigBoard currentPlayer={currentPlayer} next={switchPlayer} startGame={startGamePrompt} reloadGame={reloadGame}/>
        <p className="gameOverText">{winner && `The winner of the game is ${winner}`}</p>
        <p className="text-gameTextColor text-justify">{promptText && promptText}</p>
      </div>
    </>
  );

}

export default Game;