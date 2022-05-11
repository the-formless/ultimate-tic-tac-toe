import Square from './Square'
import { useState } from 'react';
import { calculateBoardWinner } from '../Dependencies/CalculateBoardWinner';

//active prop takes 0 or 1
//currentPlayer takes playerCharacter
function Board({boardNum, active, currentPlayer, playNextBoard}) {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ];
  const valPrototype = Array(9).fill(null);
  const [boardValues, setBoardValues] = useState(valPrototype);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if(boardValues[i] === null && active > 0 && winner === null) {
      let newBVals = boardValues.slice();
      newBVals[i] = currentPlayer;
      setBoardValues(newBVals);
      //console.log(boardValues);
      const win = calculateBoardWinner(newBVals);
      if(win !== null) {
        setWinner(win);
        console.log("Winner: "+win+ "on board: "+ boardNum);
        playNextBoard(i, boardNum);
      }
      else{
        playNextBoard(i);
      }
    }
    //console.log("Clcked on " + i);
  }

  return (
    <div className='board'>
      {arr.map((v) => <Square key={v} id={v} 
      val={boardValues[v] === null ? "": boardValues[v]}
      onClick={handleClick}/>)}
    </div>
  )
}

export default Board