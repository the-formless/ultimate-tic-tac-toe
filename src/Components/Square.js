import React from 'react'

function Square({id, val, onClick}) {
  return (
    <button className='square' onClick={() => onClick(id)}>{val}</button>
  )
}

export default Square