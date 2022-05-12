import Square from "./Square"

function CharacterSelect({selectCharacter}) {
 
  const handleClick = (v) => {
    selectCharacter(v);
  }

  const characters = ["🍎", "🍒", "🥕", "🌶️", "🍗", "🐶", "🦊", "🦄", "🐷", "🌞", "🌕", "X", "O"];
  return (
    <div className="character-select mx-auto mt-3">
        {characters.map((val, i) => <Square key={i} id={val} val={val} onClick={handleClick}/>)}
      </div>
  )
}

export default CharacterSelect