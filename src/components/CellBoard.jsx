import React from 'react'

export default function CellBoard({value, handleClick}) {
  return (
    <div className='cell-board'>
        <div className="cell" onClick={()=>handleClick(0)}>{value[0]}</div>
        <div className="cell" onClick={()=>handleClick(1)}>{value[1]}</div>
        <div className="cell" onClick={()=>handleClick(2)}>{value[2]}</div>
        <div className="cell" onClick={()=>handleClick(3)}>{value[3]}</div>
        <div className="cell" onClick={()=>handleClick(4)}>{value[4]}</div>
        <div className="cell" onClick={()=>handleClick(5)}>{value[5]}</div>
        <div className="cell" onClick={()=>handleClick(6)}>{value[6]}</div>
        <div className="cell" onClick={()=>handleClick(7)}>{value[7]}</div>
        <div className="cell" onClick={()=>handleClick(8)}>{value[8]}</div>
    </div>
  );
}
