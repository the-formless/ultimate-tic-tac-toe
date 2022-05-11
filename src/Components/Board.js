import React from 'react'
import Square from './Square'
import { useState } from 'react';

function Board() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ];
  const valPrototype = new Array(9).fill(null);
  const [boardValues, setBoardValues] = useState(valPrototype);

  const handleClick = (i) => {
    let newBVals = boardValues.slice();
    newBVals[i] = "X";
    setBoardValues(newBVals);
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