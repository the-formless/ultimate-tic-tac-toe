import Square from './Square'
import { useState } from 'react';
import { calculateBoardWinner } from '../Dependencies/CalculateBoardWinner';

//active prop takes 0, 1 or -1
//currentPlayer takes playerCharacter
function Board({boardNum, active, currentPlayer, playNextBoard, startGame}) {
  
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  //state for storing the characters and passing them to individual squares
  const valPrototype = Array(9).fill(null);
  const [boardValues, setBoardValues] = useState(valPrototype);

  //updates winner of the current board
  const [winner, setWinner] = useState(null);

  //click handler for individual squares
  const handleClick = (i) => {
    if(currentPlayer === null){
      startGame();
    }
    else
    {
      if(boardValues[i] === null && active > 0 && winner === null) {
        let newBVals = boardValues.slice();
        newBVals[i] = currentPlayer;
        setBoardValues(newBVals);
        const win = calculateBoardWinner(newBVals);
        nextTurn(win, i);
      }
    }
  }

  //determine the next play board
  function nextTurn(win, i){
    if(win !== null) {
      setWinner(win);
      console.log("Winner: "+win+ "on board: "+ boardNum);
      playNextBoard(i, boardNum);
    }
    else{
      playNextBoard(i);
    }
  }

  return (
    <div className={(active>0)? "board" : "board boardBlocked"}>
      {arr.map((v) => <Square key={v} id={v} 
      val={boardValues[v] === null ? "": boardValues[v]}
      onClick={handleClick}/>)}
      <p className='winnerName'>{(active === -1) && winner}</p>
    </div>
  )
}

export default Board