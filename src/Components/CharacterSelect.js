import Square from "./Square"
import { useState } from "react";

function CharacterSelect({selectCharacter}) {
 
  const [characters, setCharacters] = useState(["🍎", "🍒", "🥕", "🌶️", "🍗", "🐶", "🦊", "🦄", "🐷", "🌞", "🌕", "X", "O"]);
  
  const handleClick = (v) => {
    selectCharacter(v);
    const choicesLeft = characters.filter((val) => (val !== v) && val);
    setCharacters(choicesLeft);
  }

  
  return (
    <div className="character-select mx-auto mt-3">
        {characters.map((val, i) => <Square key={i} id={val} val={val} onClick={handleClick}/>)}
      </div>
  )
}

export default CharacterSelect