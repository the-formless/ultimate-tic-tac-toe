import BigBoard from "./Components/BigBoard";
import {useState} from "react";


function App() {
  
let players = ["X", "O"];
const [currentPlayer, setPlayer] = useState(players[0]);

function switchPlayer(gameOver) {
  if(gameOver){
    console.log("Game Winner Is " + gameOver);
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
    <BigBoard currentPlayer={currentPlayer} next={switchPlayer}/>
  );
}

export default App;
