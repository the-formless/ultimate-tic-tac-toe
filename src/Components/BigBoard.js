import Board from './Board'
import { useState } from 'react';
import { calculateBoardWinner } from '../Dependencies/CalculateBoardWinner';

function BigBoard({currentPlayer, next, startGame}) {
  // store 0 for unplayable board, 1 for playable board, -1 for closed board
  const [activeBoards, setActiveBoards] = useState([1, 1, 1, 1, 1, 1, 1, 1 , 1]);

  //state for storing the winners
  const valPrototype = Array(9).fill(null);
  const [boardValues, setBoardValues] = useState(valPrototype);

  const nextBoard = (i, j) => {
    let nextActiveSet = activeBoards.slice();
    let newBVals = boardValues.slice(); 
    console.log(i, j);
    if(j !== undefined){
      //closed board catched. stored in j
      nextActiveSet[j] = -1;
      newBVals[j] = currentPlayer;
      setBoardValues(newBVals);
    }
        
    //if activeBoard[i] = -1 open all boards except ones with -1
    if(nextActiveSet[i] === -1){
      nextActiveSet = nextActiveSet.map((v) => (v === -1)? -1 : 1);
    }else {
      nextActiveSet = nextActiveSet.map((v, ind) => (v===-1)? -1: (ind === i)? 1 : 0);
    }
    setActiveBoards(nextActiveSet);
    
    //check big board winner
    let winner = calculateBoardWinner(newBVals);
    if(winner) {
      nextActiveSet = nextActiveSet.fill(-1);
      setActiveBoards(nextActiveSet);
      next(winner);
    }
    else{
      next();
    }
  }

  return (
    <div className='board bigBoard'>
      {
        activeBoards.map((v, i) => <Board key={i} boardNum={i} active={v} currentPlayer={currentPlayer} playNextBoard={nextBoard} startGame={startGame}/>)
      }
    </div>
  )
}

export default BigBoard